import fs from 'fs/promises';
import path from 'path';
import type { Challenge } from '@/types/challenge';

// Use a data directory outside of src to avoid build conflicts
// Try multiple possible paths for different environments
const getChallengesPath = () => {
  const cwd = process.cwd();
  const possiblePaths = [
    path.join(cwd, 'data', 'challenges.json'), // Preferred: data directory
    path.join(cwd, 'src', 'data', 'challenges.json'), // Fallback: src/data
    path.join(cwd, 'src', 'data', 'challenges.ts'), // Legacy: TS file
  ];
  
  return possiblePaths;
};

/**
 * Dynamically loads challenges from the challenges.ts file
 * This ensures we always get the latest data, even after file updates
 */
export async function loadChallenges(): Promise<Challenge[]> {
  const possiblePaths = getChallengesPath();
  const cwd = process.cwd();
  
  console.log('Loading challenges from cwd:', cwd);
  console.log('Trying paths:', possiblePaths);
  
  for (const filePath of possiblePaths) {
    try {
      // Check if file exists
      await fs.access(filePath);
      console.log('Found challenges file at:', filePath);
      
      const fileContent = await fs.readFile(filePath, 'utf-8');
      
      // If it's a JSON file, parse directly
      if (filePath.endsWith('.json')) {
        const challenges = JSON.parse(fileContent) as Challenge[];
        console.log('Loaded', challenges.length, 'challenges from JSON file');
        return challenges;
      }
      
      // If it's a TS file, extract the JSON array
      if (filePath.endsWith('.ts')) {
        // Find the opening bracket after the equals sign
        const equalsIndex = fileContent.indexOf('=');
        if (equalsIndex === -1) {
          console.error('Failed to find equals sign in challenges file');
          continue;
        }
        
        // Find the first opening bracket after the equals sign
        const openBracketIndex = fileContent.indexOf('[', equalsIndex);
        if (openBracketIndex === -1) {
          console.error('Failed to find opening bracket in challenges file');
          continue;
        }
        
        // Find the matching closing bracket by counting brackets
        let bracketCount = 0;
        let closeBracketIndex = -1;
        for (let i = openBracketIndex; i < fileContent.length; i++) {
          if (fileContent[i] === '[') bracketCount++;
          if (fileContent[i] === ']') bracketCount--;
          if (bracketCount === 0) {
            closeBracketIndex = i;
            break;
          }
        }
        
        if (closeBracketIndex === -1) {
          console.error('Failed to find matching closing bracket in challenges file');
          continue;
        }
        
        // Extract the JSON array
        const jsonArray = fileContent.substring(openBracketIndex, closeBracketIndex + 1);
        const challenges = JSON.parse(jsonArray) as Challenge[];
        console.log('Loaded', challenges.length, 'challenges from TS file');
        return challenges;
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        // File doesn't exist, try next path
        console.log('File not found at:', filePath);
        continue;
      }
      console.error(`Error reading ${filePath}:`, error);
      continue;
    }
  }
  
  console.error('Could not find challenges file in any expected location');
  return [];
}

export function getChallengesFilePath(): string {
  // Return the preferred path for writing
  return path.join(process.cwd(), 'data', 'challenges.json');
}

