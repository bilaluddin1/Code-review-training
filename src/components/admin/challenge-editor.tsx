"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    Save,
    Plus,
    Trash2,
    Edit,
    Eye,
    Code,
    AlertTriangle,
    CheckCircle,
    XCircle
} from "lucide-react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import type { Challenge } from "@/types/challenge"

interface ChallengeEditorProps {
    challenges: Challenge[]
    onSave: (challenge: Challenge) => Promise<void>
    onDelete: (id: string) => Promise<void>
    onRefresh: () => void
}

export function ChallengeEditor({ challenges, onSave, onDelete, onRefresh }: ChallengeEditorProps) {
    const [editingChallenge, setEditingChallenge] = useState<Challenge | null>(null)
    const [isNewChallenge, setIsNewChallenge] = useState(false)
    const [selectedLines, setSelectedLines] = useState<number[]>([])
    const [saving, setSaving] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        description: "",
        code: "",
        difficulty: "beginner" as "beginner" | "intermediate" | "advanced",
        hints: [] as string[],
        explanations: {} as Record<number, string>,
        labUrl: "",
        maxSelectableLines: 1,
        flag: ""
    })

    const [hintInput, setHintInput] = useState("")
    const [explanationInput, setExplanationInput] = useState("")

    useEffect(() => {
        if (editingChallenge) {
            setFormData({
                id: editingChallenge.id,
                title: editingChallenge.title,
                description: editingChallenge.description,
                code: editingChallenge.code,
                difficulty: editingChallenge.difficulty,
                hints: editingChallenge.hints || [],
                explanations: editingChallenge.explanations,
                labUrl: editingChallenge.labUrl || "",
                maxSelectableLines: editingChallenge.maxSelectableLines || 1,
                flag: editingChallenge.flag || ""
            })
            setSelectedLines(editingChallenge.vulnerableLines)
        }
    }, [editingChallenge])

    const handleNewChallenge = () => {
        setIsNewChallenge(true)
        setEditingChallenge(null)
        setFormData({
            id: "",
            title: "",
            description: "",
            code: "",
            difficulty: "beginner",
            hints: [],
            explanations: {},
            labUrl: "",
            maxSelectableLines: 1,
            flag: ""
        })
        setSelectedLines([])
    }

    const handleEditChallenge = (challenge: Challenge) => {
        setIsNewChallenge(false)
        setEditingChallenge(challenge)
    }

    const handleCancel = () => {
        setEditingChallenge(null)
        setIsNewChallenge(false)
        setSelectedLines([])
    }

    const handleSave = async () => {
        if (!formData.id || !formData.title || !formData.code) {
            alert("Please fill in all required fields (ID, Title, Code)");
            return;
        }

        if (selectedLines.length === 0) {
            alert("Please select at least one vulnerable line");
            return;
        }

        setSaving(true);
        try {
            const challenge: Challenge = {
                id: formData.id,
                title: formData.title,
                description: formData.description,
                code: formData.code,
                vulnerableLines: selectedLines,
                difficulty: formData.difficulty,
                hints: formData.hints,
                explanations: formData.explanations,
                labUrl: formData.labUrl || undefined,
                maxSelectableLines: formData.maxSelectableLines,
                flag: formData.flag || undefined
            };

            console.log('Saving challenge:', challenge);
            await onSave(challenge);

            // Show success message
            alert(isNewChallenge ? "Challenge created successfully!" : "Challenge updated successfully!");

            handleCancel();
            onRefresh();
        } catch (error) {
            console.error("Error saving challenge:", error);
            alert(`Error saving challenge: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        const challengeToDelete = challenges.find(c => c.id === id);
        if (!challengeToDelete) {
            alert("Challenge not found!");
            return;
        }

        // Protect the DEMO challenge
        if (id === 'DEMO') {
            const demoConfirm = confirm("This is the DEMO challenge that helps new users learn the interface. Are you absolutely sure you want to delete it?");
            if (!demoConfirm) return;
        }

        const confirmMessage = `Are you sure you want to delete "${challengeToDelete.title}" (${challengeToDelete.id})?\n\nThis action cannot be undone and will permanently remove the challenge from the system.`;

        if (!confirm(confirmMessage)) return;

        setDeleting(true)
        try {
            console.log('Deleting challenge:', id);
            await onDelete(id)
            alert(`Challenge "${challengeToDelete.title}" deleted successfully!`);
            onRefresh()
        } catch (error) {
            console.error("Error deleting challenge:", error)
            alert(`Error deleting challenge: ${error instanceof Error ? error.message : 'Unknown error'}`)
        } finally {
            setDeleting(false)
        }
    }

    const toggleLine = (lineNumber: number) => {
        setSelectedLines(prev =>
            prev.includes(lineNumber)
                ? prev.filter(l => l !== lineNumber)
                : [...prev, lineNumber].sort((a, b) => a - b)
        )
    }

    const addHint = () => {
        if (hintInput.trim()) {
            setFormData(prev => ({
                ...prev,
                hints: [...prev.hints, hintInput.trim()]
            }))
            setHintInput("")
        }
    }

    const removeHint = (index: number) => {
        setFormData(prev => ({
            ...prev,
            hints: prev.hints.filter((_, i) => i !== index)
        }))
    }

    const addExplanation = () => {
        if (explanationInput.trim() && selectedLines.length > 0) {
            const lineNumber = selectedLines[selectedLines.length - 1]
            setFormData(prev => ({
                ...prev,
                explanations: {
                    ...prev.explanations,
                    [lineNumber]: explanationInput.trim()
                }
            }))
            setExplanationInput("")
        }
    }

    const removeExplanation = (lineNumber: number) => {
        setFormData(prev => {
            const newExplanations = { ...prev.explanations }
            delete newExplanations[lineNumber]
            return { ...prev, explanations: newExplanations }
        })
    }

    const codeLines = formData.code.split("\n")

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Challenge Editor</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        {challenges.length} challenge{challenges.length !== 1 ? 's' : ''} total
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={handleNewChallenge} variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        New Challenge
                    </Button>
                    <Button onClick={onRefresh} variant="outline">
                        Refresh
                    </Button>
                    {challenges.length > 1 && (
                        <Button
                            onClick={async () => {
                                const confirmDelete = confirm(
                                    `Are you sure you want to delete ALL ${challenges.length} challenges?\n\n` +
                                    `This will permanently remove all challenges except the DEMO challenge.\n\n` +
                                    `This action cannot be undone!`
                                );

                                if (confirmDelete) {
                                    setDeleting(true);
                                    try {
                                        // Delete all challenges except DEMO
                                        const challengesToDelete = challenges.filter(c => c.id !== 'DEMO');
                                        let deletedCount = 0;

                                        for (const challenge of challengesToDelete) {
                                            try {
                                                await onDelete(challenge.id);
                                                deletedCount++;
                                            } catch (error) {
                                                console.error(`Failed to delete ${challenge.id}:`, error);
                                            }
                                        }

                                        if (deletedCount > 0) {
                                            alert(`Successfully deleted ${deletedCount} challenge${deletedCount !== 1 ? 's' : ''}!`);
                                            onRefresh();
                                        }
                                    } catch (error) {
                                        console.error('Error deleting challenges:', error);
                                        alert('Error deleting challenges: ' + error);
                                    } finally {
                                        setDeleting(false);
                                    }
                                }
                            }}
                            variant="destructive"
                            disabled={deleting}
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            {deleting ? "Deleting..." : "Delete All"}
                        </Button>
                    )}
                </div>
            </div>

            {/* Challenge List */}
            {!editingChallenge && !isNewChallenge && (
                <div>
                    {challenges.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-500 mb-4">No challenges found. Loading...</p>
                            <Button onClick={onRefresh} variant="outline">
                                Refresh Challenges
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {challenges.map((challenge) => (
                                <Card key={challenge.id} className="hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            <span className="truncate">{challenge.title}</span>
                                            <Badge variant={challenge.difficulty === "beginner" ? "default" : challenge.difficulty === "intermediate" ? "secondary" : "destructive"}>
                                                {challenge.difficulty}
                                            </Badge>
                                        </CardTitle>
                                        <CardDescription className="line-clamp-2">{challenge.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex gap-2">
                                            <Button onClick={() => handleEditChallenge(challenge)} size="sm">
                                                <Edit className="h-4 w-4 mr-1" />
                                                Edit
                                            </Button>
                                            <Button
                                                onClick={() => handleDelete(challenge.id)}
                                                size="sm"
                                                variant={challenge.id === 'DEMO' ? "outline" : "destructive"}
                                                disabled={deleting}
                                                className={challenge.id === 'DEMO' ? "border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700" : ""}
                                                title={challenge.id === 'DEMO' ? "DEMO challenge helps new users learn the interface" : "Delete this challenge"}
                                            >
                                                <Trash2 className="h-4 w-4 mr-1" />
                                                {deleting ? "Deleting..." : (challenge.id === 'DEMO' ? "Delete Demo" : "Delete")}
                                            </Button>
                                        </div>
                                        <div className="mt-2 text-sm text-gray-600">
                                            Vulnerable lines: {challenge.vulnerableLines.join(", ")}
                                        </div>
                                        {challenge.id === 'DEMO' && (
                                            <div className="mt-2 p-2 bg-orange-50 border border-orange-200 rounded text-xs text-orange-700">
                                                ⚠️ Demo challenge - helps new users learn the interface
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Challenge Form */}
            {(editingChallenge || isNewChallenge) && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            {isNewChallenge ? (
                                <>
                                    <Plus className="h-5 w-5 text-green-500" />
                                    Create New Challenge
                                </>
                            ) : (
                                <>
                                    <Edit className="h-5 w-5 text-blue-500" />
                                    Edit Challenge: {editingChallenge?.title}
                                </>
                            )}
                        </CardTitle>
                        <CardDescription>
                            {isNewChallenge
                                ? "Fill in the challenge details and select vulnerable lines in the code"
                                : "Modify the challenge details and vulnerable lines"
                            }
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Challenge ID *</label>
                                <Input
                                    value={formData.id}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, id: e.target.value }))}
                                    placeholder="e.g., CHALLENGE1"
                                    disabled={!isNewChallenge}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Difficulty</label>
                                <select
                                    value={formData.difficulty}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData(prev => ({ ...prev, difficulty: e.target.value as any }))}
                                    className="w-full border rounded-md px-3 py-2"
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Title *</label>
                            <Input
                                value={formData.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="Challenge title"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Description</label>
                            <Textarea
                                value={formData.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                placeholder="Challenge description"
                                rows={3}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Lab URL</label>
                                <Input
                                    value={formData.labUrl}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, labUrl: e.target.value }))}
                                    placeholder="https://example.com/lab"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Max Selectable Lines</label>
                                <Input
                                    type="number"
                                    min="1"
                                    value={formData.maxSelectableLines}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, maxSelectableLines: parseInt(e.target.value) || 1 }))}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Flag</label>
                            <Input
                                value={formData.flag}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData(prev => ({ ...prev, flag: e.target.value }))}
                                placeholder="flag{your-flag-here}"
                            />
                        </div>

                        {/* Code Editor */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Code *</label>
                            <Textarea
                                value={formData.code}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                                placeholder="Paste your code here..."
                                rows={15}
                                className="font-mono text-sm bg-gray-900 text-gray-100 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                                style={{
                                    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                                    lineHeight: '1.5'
                                }}
                            />
                            <div className="mt-2 text-sm text-gray-600">
                                After pasting your code, click on the line numbers below to mark them as vulnerable.
                            </div>

                            {/* Code Preview with Line Selection */}
                            {formData.code && (
                                <div className="mt-4">
                                    <label className="block text-sm font-medium mb-2">Select Vulnerable Lines:</label>
                                    <div className="border rounded-lg overflow-hidden bg-gray-900">
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={oneDark}
                                            customStyle={{ background: 'transparent', fontSize: 14, margin: 0, padding: 16 }}
                                            showLineNumbers
                                            wrapLines
                                            lineProps={(lineNumber: number) => {
                                                const isSelected = selectedLines.includes(lineNumber)
                                                let className = "cursor-pointer transition-colors "
                                                if (isSelected) className += "bg-blue-900/50 "
                                                return {
                                                    className,
                                                    onClick: () => toggleLine(lineNumber),
                                                    style: { cursor: 'pointer' },
                                                }
                                            }}
                                            lineNumberStyle={{ minWidth: 32, color: '#888', textAlign: 'right', userSelect: 'none', marginRight: 16 }}
                                        >
                                            {formData.code}
                                        </SyntaxHighlighter>
                                    </div>
                                    <div className="mt-2 text-sm text-gray-600">
                                        Selected vulnerable lines: {selectedLines.length > 0 ? selectedLines.join(", ") : "None selected"}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Hints */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Hints</label>
                            <div className="flex gap-2 mb-2">
                                <Input
                                    value={hintInput}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHintInput(e.target.value)}
                                    placeholder="Add a hint"
                                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addHint()}
                                />
                                <Button onClick={addHint} size="sm">Add</Button>
                            </div>
                            <div className="space-y-2">
                                {formData.hints.map((hint, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                        <span className="flex-1">{hint}</span>
                                        <Button onClick={() => removeHint(index)} size="sm" variant="outline">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Explanations */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Line Explanations</label>
                            <div className="flex gap-2 mb-2">
                                <Input
                                    value={explanationInput}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExplanationInput(e.target.value)}
                                    placeholder="Explanation for selected line"
                                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addExplanation()}
                                />
                                <Button onClick={addExplanation} size="sm" disabled={selectedLines.length === 0}>
                                    Add for Line {selectedLines[selectedLines.length - 1]}
                                </Button>
                            </div>
                            <div className="space-y-2">
                                {Object.entries(formData.explanations).map(([line, explanation]) => (
                                    <div key={line} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                        <Badge variant="outline">Line {line}</Badge>
                                        <span className="flex-1">{explanation}</span>
                                        <Button onClick={() => removeExplanation(parseInt(line))} size="sm" variant="outline">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 justify-end">
                            <Button onClick={handleCancel} variant="outline">
                                Cancel
                            </Button>
                            <Button onClick={handleSave} disabled={saving}>
                                <Save className="h-4 w-4 mr-2" />
                                {saving ? "Saving..." : (isNewChallenge ? "Create Challenge" : "Update Challenge")}
                            </Button>
                        </div>

                        {/* Debug Section - Only show in development */}
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Debug Info:</h4>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <div>Mode: {isNewChallenge ? 'Create' : 'Edit'}</div>
                                    <div>Challenge ID: {formData.id}</div>
                                    <div>Selected Lines: {selectedLines.join(', ') || 'None'}</div>
                                    <div>Code Length: {formData.code.length} characters</div>
                                    <Button
                                        onClick={async () => {
                                            try {
                                                const res = await fetch('/api/admin/challenges');
                                                const data = await res.json();
                                                console.log('Current challenges:', data);
                                                alert(`Found ${data.length} challenges`);
                                            } catch (error) {
                                                console.error('Debug error:', error);
                                                alert('Debug error: ' + error);
                                            }
                                        }}
                                        size="sm"
                                        variant="outline"
                                    >
                                        Test API Connection
                                    </Button>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
