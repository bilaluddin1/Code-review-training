
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ChallengeLock
 * 
 */
export type ChallengeLock = $Result.DefaultSelection<Prisma.$ChallengeLockPayload>
/**
 * Model LeaderboardUser
 * 
 */
export type LeaderboardUser = $Result.DefaultSelection<Prisma.$LeaderboardUserPayload>
/**
 * Model ChallengeSubmission
 * 
 */
export type ChallengeSubmission = $Result.DefaultSelection<Prisma.$ChallengeSubmissionPayload>
/**
 * Model FlagSubmission
 * 
 */
export type FlagSubmission = $Result.DefaultSelection<Prisma.$FlagSubmissionPayload>
/**
 * Model SessionArchive
 * 
 */
export type SessionArchive = $Result.DefaultSelection<Prisma.$SessionArchivePayload>
/**
 * Model FeedbackResponse
 * 
 */
export type FeedbackResponse = $Result.DefaultSelection<Prisma.$FeedbackResponsePayload>
/**
 * Model FeedbackAnswer
 * 
 */
export type FeedbackAnswer = $Result.DefaultSelection<Prisma.$FeedbackAnswerPayload>
/**
 * Model FeedbackQuestion
 * 
 */
export type FeedbackQuestion = $Result.DefaultSelection<Prisma.$FeedbackQuestionPayload>
/**
 * Model FeedbackToggle
 * 
 */
export type FeedbackToggle = $Result.DefaultSelection<Prisma.$FeedbackTogglePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChallengeLocks
 * const challengeLocks = await prisma.challengeLock.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ChallengeLocks
   * const challengeLocks = await prisma.challengeLock.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.challengeLock`: Exposes CRUD operations for the **ChallengeLock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeLocks
    * const challengeLocks = await prisma.challengeLock.findMany()
    * ```
    */
  get challengeLock(): Prisma.ChallengeLockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboardUser`: Exposes CRUD operations for the **LeaderboardUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderboardUsers
    * const leaderboardUsers = await prisma.leaderboardUser.findMany()
    * ```
    */
  get leaderboardUser(): Prisma.LeaderboardUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeSubmission`: Exposes CRUD operations for the **ChallengeSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeSubmissions
    * const challengeSubmissions = await prisma.challengeSubmission.findMany()
    * ```
    */
  get challengeSubmission(): Prisma.ChallengeSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flagSubmission`: Exposes CRUD operations for the **FlagSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlagSubmissions
    * const flagSubmissions = await prisma.flagSubmission.findMany()
    * ```
    */
  get flagSubmission(): Prisma.FlagSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionArchive`: Exposes CRUD operations for the **SessionArchive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionArchives
    * const sessionArchives = await prisma.sessionArchive.findMany()
    * ```
    */
  get sessionArchive(): Prisma.SessionArchiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbackResponse`: Exposes CRUD operations for the **FeedbackResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackResponses
    * const feedbackResponses = await prisma.feedbackResponse.findMany()
    * ```
    */
  get feedbackResponse(): Prisma.FeedbackResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbackAnswer`: Exposes CRUD operations for the **FeedbackAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackAnswers
    * const feedbackAnswers = await prisma.feedbackAnswer.findMany()
    * ```
    */
  get feedbackAnswer(): Prisma.FeedbackAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbackQuestion`: Exposes CRUD operations for the **FeedbackQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackQuestions
    * const feedbackQuestions = await prisma.feedbackQuestion.findMany()
    * ```
    */
  get feedbackQuestion(): Prisma.FeedbackQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedbackToggle`: Exposes CRUD operations for the **FeedbackToggle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedbackToggles
    * const feedbackToggles = await prisma.feedbackToggle.findMany()
    * ```
    */
  get feedbackToggle(): Prisma.FeedbackToggleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ChallengeLock: 'ChallengeLock',
    LeaderboardUser: 'LeaderboardUser',
    ChallengeSubmission: 'ChallengeSubmission',
    FlagSubmission: 'FlagSubmission',
    SessionArchive: 'SessionArchive',
    FeedbackResponse: 'FeedbackResponse',
    FeedbackAnswer: 'FeedbackAnswer',
    FeedbackQuestion: 'FeedbackQuestion',
    FeedbackToggle: 'FeedbackToggle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "challengeLock" | "leaderboardUser" | "challengeSubmission" | "flagSubmission" | "sessionArchive" | "feedbackResponse" | "feedbackAnswer" | "feedbackQuestion" | "feedbackToggle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ChallengeLock: {
        payload: Prisma.$ChallengeLockPayload<ExtArgs>
        fields: Prisma.ChallengeLockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeLockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeLockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>
          }
          findFirst: {
            args: Prisma.ChallengeLockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeLockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>
          }
          findMany: {
            args: Prisma.ChallengeLockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>[]
          }
          create: {
            args: Prisma.ChallengeLockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>
          }
          createMany: {
            args: Prisma.ChallengeLockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeLockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>[]
          }
          delete: {
            args: Prisma.ChallengeLockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>
          }
          update: {
            args: Prisma.ChallengeLockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeLockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeLockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeLockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeLockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeLockPayload>
          }
          aggregate: {
            args: Prisma.ChallengeLockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeLock>
          }
          groupBy: {
            args: Prisma.ChallengeLockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeLockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeLockCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeLockCountAggregateOutputType> | number
          }
        }
      }
      LeaderboardUser: {
        payload: Prisma.$LeaderboardUserPayload<ExtArgs>
        fields: Prisma.LeaderboardUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderboardUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderboardUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>
          }
          findFirst: {
            args: Prisma.LeaderboardUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderboardUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>
          }
          findMany: {
            args: Prisma.LeaderboardUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>[]
          }
          create: {
            args: Prisma.LeaderboardUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>
          }
          createMany: {
            args: Prisma.LeaderboardUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderboardUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>[]
          }
          delete: {
            args: Prisma.LeaderboardUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>
          }
          update: {
            args: Prisma.LeaderboardUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>
          }
          deleteMany: {
            args: Prisma.LeaderboardUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderboardUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderboardUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>[]
          }
          upsert: {
            args: Prisma.LeaderboardUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardUserPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboardUser>
          }
          groupBy: {
            args: Prisma.LeaderboardUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderboardUserCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardUserCountAggregateOutputType> | number
          }
        }
      }
      ChallengeSubmission: {
        payload: Prisma.$ChallengeSubmissionPayload<ExtArgs>
        fields: Prisma.ChallengeSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ChallengeSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>
          }
          findMany: {
            args: Prisma.ChallengeSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>[]
          }
          create: {
            args: Prisma.ChallengeSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>
          }
          createMany: {
            args: Prisma.ChallengeSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ChallengeSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>
          }
          update: {
            args: Prisma.ChallengeSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ChallengeSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeSubmission>
          }
          groupBy: {
            args: Prisma.ChallengeSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeSubmissionCountAggregateOutputType> | number
          }
        }
      }
      FlagSubmission: {
        payload: Prisma.$FlagSubmissionPayload<ExtArgs>
        fields: Prisma.FlagSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlagSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlagSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          findFirst: {
            args: Prisma.FlagSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlagSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          findMany: {
            args: Prisma.FlagSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>[]
          }
          create: {
            args: Prisma.FlagSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          createMany: {
            args: Prisma.FlagSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlagSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>[]
          }
          delete: {
            args: Prisma.FlagSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          update: {
            args: Prisma.FlagSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.FlagSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlagSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlagSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.FlagSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagSubmissionPayload>
          }
          aggregate: {
            args: Prisma.FlagSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlagSubmission>
          }
          groupBy: {
            args: Prisma.FlagSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlagSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlagSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<FlagSubmissionCountAggregateOutputType> | number
          }
        }
      }
      SessionArchive: {
        payload: Prisma.$SessionArchivePayload<ExtArgs>
        fields: Prisma.SessionArchiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionArchiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionArchiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>
          }
          findFirst: {
            args: Prisma.SessionArchiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionArchiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>
          }
          findMany: {
            args: Prisma.SessionArchiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>[]
          }
          create: {
            args: Prisma.SessionArchiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>
          }
          createMany: {
            args: Prisma.SessionArchiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionArchiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>[]
          }
          delete: {
            args: Prisma.SessionArchiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>
          }
          update: {
            args: Prisma.SessionArchiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>
          }
          deleteMany: {
            args: Prisma.SessionArchiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionArchiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionArchiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>[]
          }
          upsert: {
            args: Prisma.SessionArchiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionArchivePayload>
          }
          aggregate: {
            args: Prisma.SessionArchiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionArchive>
          }
          groupBy: {
            args: Prisma.SessionArchiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionArchiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionArchiveCountArgs<ExtArgs>
            result: $Utils.Optional<SessionArchiveCountAggregateOutputType> | number
          }
        }
      }
      FeedbackResponse: {
        payload: Prisma.$FeedbackResponsePayload<ExtArgs>
        fields: Prisma.FeedbackResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          findFirst: {
            args: Prisma.FeedbackResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          findMany: {
            args: Prisma.FeedbackResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>[]
          }
          create: {
            args: Prisma.FeedbackResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          createMany: {
            args: Prisma.FeedbackResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>[]
          }
          delete: {
            args: Prisma.FeedbackResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          update: {
            args: Prisma.FeedbackResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          deleteMany: {
            args: Prisma.FeedbackResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>[]
          }
          upsert: {
            args: Prisma.FeedbackResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackResponsePayload>
          }
          aggregate: {
            args: Prisma.FeedbackResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackResponse>
          }
          groupBy: {
            args: Prisma.FeedbackResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackResponseCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackResponseCountAggregateOutputType> | number
          }
        }
      }
      FeedbackAnswer: {
        payload: Prisma.$FeedbackAnswerPayload<ExtArgs>
        fields: Prisma.FeedbackAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>
          }
          findFirst: {
            args: Prisma.FeedbackAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>
          }
          findMany: {
            args: Prisma.FeedbackAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>[]
          }
          create: {
            args: Prisma.FeedbackAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>
          }
          createMany: {
            args: Prisma.FeedbackAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>[]
          }
          delete: {
            args: Prisma.FeedbackAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>
          }
          update: {
            args: Prisma.FeedbackAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackAnswerPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackAnswer>
          }
          groupBy: {
            args: Prisma.FeedbackAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackAnswerCountAggregateOutputType> | number
          }
        }
      }
      FeedbackQuestion: {
        payload: Prisma.$FeedbackQuestionPayload<ExtArgs>
        fields: Prisma.FeedbackQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>
          }
          findFirst: {
            args: Prisma.FeedbackQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>
          }
          findMany: {
            args: Prisma.FeedbackQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>[]
          }
          create: {
            args: Prisma.FeedbackQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>
          }
          createMany: {
            args: Prisma.FeedbackQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>[]
          }
          delete: {
            args: Prisma.FeedbackQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>
          }
          update: {
            args: Prisma.FeedbackQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackQuestionPayload>
          }
          aggregate: {
            args: Prisma.FeedbackQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackQuestion>
          }
          groupBy: {
            args: Prisma.FeedbackQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackQuestionCountAggregateOutputType> | number
          }
        }
      }
      FeedbackToggle: {
        payload: Prisma.$FeedbackTogglePayload<ExtArgs>
        fields: Prisma.FeedbackToggleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackToggleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackToggleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>
          }
          findFirst: {
            args: Prisma.FeedbackToggleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackToggleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>
          }
          findMany: {
            args: Prisma.FeedbackToggleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>[]
          }
          create: {
            args: Prisma.FeedbackToggleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>
          }
          createMany: {
            args: Prisma.FeedbackToggleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackToggleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>[]
          }
          delete: {
            args: Prisma.FeedbackToggleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>
          }
          update: {
            args: Prisma.FeedbackToggleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>
          }
          deleteMany: {
            args: Prisma.FeedbackToggleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackToggleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackToggleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>[]
          }
          upsert: {
            args: Prisma.FeedbackToggleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackTogglePayload>
          }
          aggregate: {
            args: Prisma.FeedbackToggleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedbackToggle>
          }
          groupBy: {
            args: Prisma.FeedbackToggleGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackToggleGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackToggleCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackToggleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    challengeLock?: ChallengeLockOmit
    leaderboardUser?: LeaderboardUserOmit
    challengeSubmission?: ChallengeSubmissionOmit
    flagSubmission?: FlagSubmissionOmit
    sessionArchive?: SessionArchiveOmit
    feedbackResponse?: FeedbackResponseOmit
    feedbackAnswer?: FeedbackAnswerOmit
    feedbackQuestion?: FeedbackQuestionOmit
    feedbackToggle?: FeedbackToggleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FeedbackResponseCountOutputType
   */

  export type FeedbackResponseCountOutputType = {
    answers: number
  }

  export type FeedbackResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | FeedbackResponseCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * FeedbackResponseCountOutputType without action
   */
  export type FeedbackResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponseCountOutputType
     */
    select?: FeedbackResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeedbackResponseCountOutputType without action
   */
  export type FeedbackResponseCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ChallengeLock
   */

  export type AggregateChallengeLock = {
    _count: ChallengeLockCountAggregateOutputType | null
    _min: ChallengeLockMinAggregateOutputType | null
    _max: ChallengeLockMaxAggregateOutputType | null
  }

  export type ChallengeLockMinAggregateOutputType = {
    id: string | null
    locked: boolean | null
  }

  export type ChallengeLockMaxAggregateOutputType = {
    id: string | null
    locked: boolean | null
  }

  export type ChallengeLockCountAggregateOutputType = {
    id: number
    locked: number
    _all: number
  }


  export type ChallengeLockMinAggregateInputType = {
    id?: true
    locked?: true
  }

  export type ChallengeLockMaxAggregateInputType = {
    id?: true
    locked?: true
  }

  export type ChallengeLockCountAggregateInputType = {
    id?: true
    locked?: true
    _all?: true
  }

  export type ChallengeLockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeLock to aggregate.
     */
    where?: ChallengeLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeLocks to fetch.
     */
    orderBy?: ChallengeLockOrderByWithRelationInput | ChallengeLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeLocks
    **/
    _count?: true | ChallengeLockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeLockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeLockMaxAggregateInputType
  }

  export type GetChallengeLockAggregateType<T extends ChallengeLockAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeLock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeLock[P]>
      : GetScalarType<T[P], AggregateChallengeLock[P]>
  }




  export type ChallengeLockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeLockWhereInput
    orderBy?: ChallengeLockOrderByWithAggregationInput | ChallengeLockOrderByWithAggregationInput[]
    by: ChallengeLockScalarFieldEnum[] | ChallengeLockScalarFieldEnum
    having?: ChallengeLockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeLockCountAggregateInputType | true
    _min?: ChallengeLockMinAggregateInputType
    _max?: ChallengeLockMaxAggregateInputType
  }

  export type ChallengeLockGroupByOutputType = {
    id: string
    locked: boolean
    _count: ChallengeLockCountAggregateOutputType | null
    _min: ChallengeLockMinAggregateOutputType | null
    _max: ChallengeLockMaxAggregateOutputType | null
  }

  type GetChallengeLockGroupByPayload<T extends ChallengeLockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeLockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeLockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeLockGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeLockGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeLockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locked?: boolean
  }, ExtArgs["result"]["challengeLock"]>

  export type ChallengeLockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locked?: boolean
  }, ExtArgs["result"]["challengeLock"]>

  export type ChallengeLockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locked?: boolean
  }, ExtArgs["result"]["challengeLock"]>

  export type ChallengeLockSelectScalar = {
    id?: boolean
    locked?: boolean
  }

  export type ChallengeLockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locked", ExtArgs["result"]["challengeLock"]>

  export type $ChallengeLockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeLock"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locked: boolean
    }, ExtArgs["result"]["challengeLock"]>
    composites: {}
  }

  type ChallengeLockGetPayload<S extends boolean | null | undefined | ChallengeLockDefaultArgs> = $Result.GetResult<Prisma.$ChallengeLockPayload, S>

  type ChallengeLockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeLockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeLockCountAggregateInputType | true
    }

  export interface ChallengeLockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeLock'], meta: { name: 'ChallengeLock' } }
    /**
     * Find zero or one ChallengeLock that matches the filter.
     * @param {ChallengeLockFindUniqueArgs} args - Arguments to find a ChallengeLock
     * @example
     * // Get one ChallengeLock
     * const challengeLock = await prisma.challengeLock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeLockFindUniqueArgs>(args: SelectSubset<T, ChallengeLockFindUniqueArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeLock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeLockFindUniqueOrThrowArgs} args - Arguments to find a ChallengeLock
     * @example
     * // Get one ChallengeLock
     * const challengeLock = await prisma.challengeLock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeLockFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeLockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeLock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeLockFindFirstArgs} args - Arguments to find a ChallengeLock
     * @example
     * // Get one ChallengeLock
     * const challengeLock = await prisma.challengeLock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeLockFindFirstArgs>(args?: SelectSubset<T, ChallengeLockFindFirstArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeLock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeLockFindFirstOrThrowArgs} args - Arguments to find a ChallengeLock
     * @example
     * // Get one ChallengeLock
     * const challengeLock = await prisma.challengeLock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeLockFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeLockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeLocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeLockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeLocks
     * const challengeLocks = await prisma.challengeLock.findMany()
     * 
     * // Get first 10 ChallengeLocks
     * const challengeLocks = await prisma.challengeLock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeLockWithIdOnly = await prisma.challengeLock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeLockFindManyArgs>(args?: SelectSubset<T, ChallengeLockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeLock.
     * @param {ChallengeLockCreateArgs} args - Arguments to create a ChallengeLock.
     * @example
     * // Create one ChallengeLock
     * const ChallengeLock = await prisma.challengeLock.create({
     *   data: {
     *     // ... data to create a ChallengeLock
     *   }
     * })
     * 
     */
    create<T extends ChallengeLockCreateArgs>(args: SelectSubset<T, ChallengeLockCreateArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeLocks.
     * @param {ChallengeLockCreateManyArgs} args - Arguments to create many ChallengeLocks.
     * @example
     * // Create many ChallengeLocks
     * const challengeLock = await prisma.challengeLock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeLockCreateManyArgs>(args?: SelectSubset<T, ChallengeLockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeLocks and returns the data saved in the database.
     * @param {ChallengeLockCreateManyAndReturnArgs} args - Arguments to create many ChallengeLocks.
     * @example
     * // Create many ChallengeLocks
     * const challengeLock = await prisma.challengeLock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeLocks and only return the `id`
     * const challengeLockWithIdOnly = await prisma.challengeLock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeLockCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeLockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeLock.
     * @param {ChallengeLockDeleteArgs} args - Arguments to delete one ChallengeLock.
     * @example
     * // Delete one ChallengeLock
     * const ChallengeLock = await prisma.challengeLock.delete({
     *   where: {
     *     // ... filter to delete one ChallengeLock
     *   }
     * })
     * 
     */
    delete<T extends ChallengeLockDeleteArgs>(args: SelectSubset<T, ChallengeLockDeleteArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeLock.
     * @param {ChallengeLockUpdateArgs} args - Arguments to update one ChallengeLock.
     * @example
     * // Update one ChallengeLock
     * const challengeLock = await prisma.challengeLock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeLockUpdateArgs>(args: SelectSubset<T, ChallengeLockUpdateArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeLocks.
     * @param {ChallengeLockDeleteManyArgs} args - Arguments to filter ChallengeLocks to delete.
     * @example
     * // Delete a few ChallengeLocks
     * const { count } = await prisma.challengeLock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeLockDeleteManyArgs>(args?: SelectSubset<T, ChallengeLockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeLockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeLocks
     * const challengeLock = await prisma.challengeLock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeLockUpdateManyArgs>(args: SelectSubset<T, ChallengeLockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeLocks and returns the data updated in the database.
     * @param {ChallengeLockUpdateManyAndReturnArgs} args - Arguments to update many ChallengeLocks.
     * @example
     * // Update many ChallengeLocks
     * const challengeLock = await prisma.challengeLock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeLocks and only return the `id`
     * const challengeLockWithIdOnly = await prisma.challengeLock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeLockUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeLockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeLock.
     * @param {ChallengeLockUpsertArgs} args - Arguments to update or create a ChallengeLock.
     * @example
     * // Update or create a ChallengeLock
     * const challengeLock = await prisma.challengeLock.upsert({
     *   create: {
     *     // ... data to create a ChallengeLock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeLock we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeLockUpsertArgs>(args: SelectSubset<T, ChallengeLockUpsertArgs<ExtArgs>>): Prisma__ChallengeLockClient<$Result.GetResult<Prisma.$ChallengeLockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeLockCountArgs} args - Arguments to filter ChallengeLocks to count.
     * @example
     * // Count the number of ChallengeLocks
     * const count = await prisma.challengeLock.count({
     *   where: {
     *     // ... the filter for the ChallengeLocks we want to count
     *   }
     * })
    **/
    count<T extends ChallengeLockCountArgs>(
      args?: Subset<T, ChallengeLockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeLockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeLockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeLockAggregateArgs>(args: Subset<T, ChallengeLockAggregateArgs>): Prisma.PrismaPromise<GetChallengeLockAggregateType<T>>

    /**
     * Group by ChallengeLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeLockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeLockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeLockGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeLockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeLockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeLockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeLock model
   */
  readonly fields: ChallengeLockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeLock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeLockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChallengeLock model
   */
  interface ChallengeLockFieldRefs {
    readonly id: FieldRef<"ChallengeLock", 'String'>
    readonly locked: FieldRef<"ChallengeLock", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeLock findUnique
   */
  export type ChallengeLockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeLock to fetch.
     */
    where: ChallengeLockWhereUniqueInput
  }

  /**
   * ChallengeLock findUniqueOrThrow
   */
  export type ChallengeLockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeLock to fetch.
     */
    where: ChallengeLockWhereUniqueInput
  }

  /**
   * ChallengeLock findFirst
   */
  export type ChallengeLockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeLock to fetch.
     */
    where?: ChallengeLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeLocks to fetch.
     */
    orderBy?: ChallengeLockOrderByWithRelationInput | ChallengeLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeLocks.
     */
    cursor?: ChallengeLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeLocks.
     */
    distinct?: ChallengeLockScalarFieldEnum | ChallengeLockScalarFieldEnum[]
  }

  /**
   * ChallengeLock findFirstOrThrow
   */
  export type ChallengeLockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeLock to fetch.
     */
    where?: ChallengeLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeLocks to fetch.
     */
    orderBy?: ChallengeLockOrderByWithRelationInput | ChallengeLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeLocks.
     */
    cursor?: ChallengeLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeLocks.
     */
    distinct?: ChallengeLockScalarFieldEnum | ChallengeLockScalarFieldEnum[]
  }

  /**
   * ChallengeLock findMany
   */
  export type ChallengeLockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeLocks to fetch.
     */
    where?: ChallengeLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeLocks to fetch.
     */
    orderBy?: ChallengeLockOrderByWithRelationInput | ChallengeLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeLocks.
     */
    cursor?: ChallengeLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeLocks.
     */
    skip?: number
    distinct?: ChallengeLockScalarFieldEnum | ChallengeLockScalarFieldEnum[]
  }

  /**
   * ChallengeLock create
   */
  export type ChallengeLockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * The data needed to create a ChallengeLock.
     */
    data: XOR<ChallengeLockCreateInput, ChallengeLockUncheckedCreateInput>
  }

  /**
   * ChallengeLock createMany
   */
  export type ChallengeLockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeLocks.
     */
    data: ChallengeLockCreateManyInput | ChallengeLockCreateManyInput[]
  }

  /**
   * ChallengeLock createManyAndReturn
   */
  export type ChallengeLockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeLocks.
     */
    data: ChallengeLockCreateManyInput | ChallengeLockCreateManyInput[]
  }

  /**
   * ChallengeLock update
   */
  export type ChallengeLockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * The data needed to update a ChallengeLock.
     */
    data: XOR<ChallengeLockUpdateInput, ChallengeLockUncheckedUpdateInput>
    /**
     * Choose, which ChallengeLock to update.
     */
    where: ChallengeLockWhereUniqueInput
  }

  /**
   * ChallengeLock updateMany
   */
  export type ChallengeLockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeLocks.
     */
    data: XOR<ChallengeLockUpdateManyMutationInput, ChallengeLockUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeLocks to update
     */
    where?: ChallengeLockWhereInput
    /**
     * Limit how many ChallengeLocks to update.
     */
    limit?: number
  }

  /**
   * ChallengeLock updateManyAndReturn
   */
  export type ChallengeLockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeLocks.
     */
    data: XOR<ChallengeLockUpdateManyMutationInput, ChallengeLockUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeLocks to update
     */
    where?: ChallengeLockWhereInput
    /**
     * Limit how many ChallengeLocks to update.
     */
    limit?: number
  }

  /**
   * ChallengeLock upsert
   */
  export type ChallengeLockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * The filter to search for the ChallengeLock to update in case it exists.
     */
    where: ChallengeLockWhereUniqueInput
    /**
     * In case the ChallengeLock found by the `where` argument doesn't exist, create a new ChallengeLock with this data.
     */
    create: XOR<ChallengeLockCreateInput, ChallengeLockUncheckedCreateInput>
    /**
     * In case the ChallengeLock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeLockUpdateInput, ChallengeLockUncheckedUpdateInput>
  }

  /**
   * ChallengeLock delete
   */
  export type ChallengeLockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
    /**
     * Filter which ChallengeLock to delete.
     */
    where: ChallengeLockWhereUniqueInput
  }

  /**
   * ChallengeLock deleteMany
   */
  export type ChallengeLockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeLocks to delete
     */
    where?: ChallengeLockWhereInput
    /**
     * Limit how many ChallengeLocks to delete.
     */
    limit?: number
  }

  /**
   * ChallengeLock without action
   */
  export type ChallengeLockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeLock
     */
    select?: ChallengeLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeLock
     */
    omit?: ChallengeLockOmit<ExtArgs> | null
  }


  /**
   * Model LeaderboardUser
   */

  export type AggregateLeaderboardUser = {
    _count: LeaderboardUserCountAggregateOutputType | null
    _avg: LeaderboardUserAvgAggregateOutputType | null
    _sum: LeaderboardUserSumAggregateOutputType | null
    _min: LeaderboardUserMinAggregateOutputType | null
    _max: LeaderboardUserMaxAggregateOutputType | null
  }

  export type LeaderboardUserAvgAggregateOutputType = {
    score: number | null
  }

  export type LeaderboardUserSumAggregateOutputType = {
    score: number | null
  }

  export type LeaderboardUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    score: number | null
    updatedAt: Date | null
  }

  export type LeaderboardUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    score: number | null
    updatedAt: Date | null
  }

  export type LeaderboardUserCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    score: number
    updatedAt: number
    _all: number
  }


  export type LeaderboardUserAvgAggregateInputType = {
    score?: true
  }

  export type LeaderboardUserSumAggregateInputType = {
    score?: true
  }

  export type LeaderboardUserMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    score?: true
    updatedAt?: true
  }

  export type LeaderboardUserMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    score?: true
    updatedAt?: true
  }

  export type LeaderboardUserCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    score?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaderboardUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardUser to aggregate.
     */
    where?: LeaderboardUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardUsers to fetch.
     */
    orderBy?: LeaderboardUserOrderByWithRelationInput | LeaderboardUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderboardUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderboardUsers
    **/
    _count?: true | LeaderboardUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderboardUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderboardUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardUserMaxAggregateInputType
  }

  export type GetLeaderboardUserAggregateType<T extends LeaderboardUserAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboardUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboardUser[P]>
      : GetScalarType<T[P], AggregateLeaderboardUser[P]>
  }




  export type LeaderboardUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardUserWhereInput
    orderBy?: LeaderboardUserOrderByWithAggregationInput | LeaderboardUserOrderByWithAggregationInput[]
    by: LeaderboardUserScalarFieldEnum[] | LeaderboardUserScalarFieldEnum
    having?: LeaderboardUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardUserCountAggregateInputType | true
    _avg?: LeaderboardUserAvgAggregateInputType
    _sum?: LeaderboardUserSumAggregateInputType
    _min?: LeaderboardUserMinAggregateInputType
    _max?: LeaderboardUserMaxAggregateInputType
  }

  export type LeaderboardUserGroupByOutputType = {
    id: string
    name: string
    avatar: string
    score: number
    updatedAt: Date
    _count: LeaderboardUserCountAggregateOutputType | null
    _avg: LeaderboardUserAvgAggregateOutputType | null
    _sum: LeaderboardUserSumAggregateOutputType | null
    _min: LeaderboardUserMinAggregateOutputType | null
    _max: LeaderboardUserMaxAggregateOutputType | null
  }

  type GetLeaderboardUserGroupByPayload<T extends LeaderboardUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardUserGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardUserGroupByOutputType[P]>
        }
      >
    >


  export type LeaderboardUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    score?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaderboardUser"]>

  export type LeaderboardUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    score?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaderboardUser"]>

  export type LeaderboardUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    score?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaderboardUser"]>

  export type LeaderboardUserSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    score?: boolean
    updatedAt?: boolean
  }

  export type LeaderboardUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "score" | "updatedAt", ExtArgs["result"]["leaderboardUser"]>

  export type $LeaderboardUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderboardUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatar: string
      score: number
      updatedAt: Date
    }, ExtArgs["result"]["leaderboardUser"]>
    composites: {}
  }

  type LeaderboardUserGetPayload<S extends boolean | null | undefined | LeaderboardUserDefaultArgs> = $Result.GetResult<Prisma.$LeaderboardUserPayload, S>

  type LeaderboardUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderboardUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardUserCountAggregateInputType | true
    }

  export interface LeaderboardUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderboardUser'], meta: { name: 'LeaderboardUser' } }
    /**
     * Find zero or one LeaderboardUser that matches the filter.
     * @param {LeaderboardUserFindUniqueArgs} args - Arguments to find a LeaderboardUser
     * @example
     * // Get one LeaderboardUser
     * const leaderboardUser = await prisma.leaderboardUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardUserFindUniqueArgs>(args: SelectSubset<T, LeaderboardUserFindUniqueArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderboardUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardUserFindUniqueOrThrowArgs} args - Arguments to find a LeaderboardUser
     * @example
     * // Get one LeaderboardUser
     * const leaderboardUser = await prisma.leaderboardUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardUserFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderboardUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUserFindFirstArgs} args - Arguments to find a LeaderboardUser
     * @example
     * // Get one LeaderboardUser
     * const leaderboardUser = await prisma.leaderboardUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardUserFindFirstArgs>(args?: SelectSubset<T, LeaderboardUserFindFirstArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUserFindFirstOrThrowArgs} args - Arguments to find a LeaderboardUser
     * @example
     * // Get one LeaderboardUser
     * const leaderboardUser = await prisma.leaderboardUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardUserFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderboardUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderboardUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderboardUsers
     * const leaderboardUsers = await prisma.leaderboardUser.findMany()
     * 
     * // Get first 10 LeaderboardUsers
     * const leaderboardUsers = await prisma.leaderboardUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardUserWithIdOnly = await prisma.leaderboardUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderboardUserFindManyArgs>(args?: SelectSubset<T, LeaderboardUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderboardUser.
     * @param {LeaderboardUserCreateArgs} args - Arguments to create a LeaderboardUser.
     * @example
     * // Create one LeaderboardUser
     * const LeaderboardUser = await prisma.leaderboardUser.create({
     *   data: {
     *     // ... data to create a LeaderboardUser
     *   }
     * })
     * 
     */
    create<T extends LeaderboardUserCreateArgs>(args: SelectSubset<T, LeaderboardUserCreateArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderboardUsers.
     * @param {LeaderboardUserCreateManyArgs} args - Arguments to create many LeaderboardUsers.
     * @example
     * // Create many LeaderboardUsers
     * const leaderboardUser = await prisma.leaderboardUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderboardUserCreateManyArgs>(args?: SelectSubset<T, LeaderboardUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderboardUsers and returns the data saved in the database.
     * @param {LeaderboardUserCreateManyAndReturnArgs} args - Arguments to create many LeaderboardUsers.
     * @example
     * // Create many LeaderboardUsers
     * const leaderboardUser = await prisma.leaderboardUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderboardUsers and only return the `id`
     * const leaderboardUserWithIdOnly = await prisma.leaderboardUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderboardUserCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderboardUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderboardUser.
     * @param {LeaderboardUserDeleteArgs} args - Arguments to delete one LeaderboardUser.
     * @example
     * // Delete one LeaderboardUser
     * const LeaderboardUser = await prisma.leaderboardUser.delete({
     *   where: {
     *     // ... filter to delete one LeaderboardUser
     *   }
     * })
     * 
     */
    delete<T extends LeaderboardUserDeleteArgs>(args: SelectSubset<T, LeaderboardUserDeleteArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderboardUser.
     * @param {LeaderboardUserUpdateArgs} args - Arguments to update one LeaderboardUser.
     * @example
     * // Update one LeaderboardUser
     * const leaderboardUser = await prisma.leaderboardUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderboardUserUpdateArgs>(args: SelectSubset<T, LeaderboardUserUpdateArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderboardUsers.
     * @param {LeaderboardUserDeleteManyArgs} args - Arguments to filter LeaderboardUsers to delete.
     * @example
     * // Delete a few LeaderboardUsers
     * const { count } = await prisma.leaderboardUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderboardUserDeleteManyArgs>(args?: SelectSubset<T, LeaderboardUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderboardUsers
     * const leaderboardUser = await prisma.leaderboardUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderboardUserUpdateManyArgs>(args: SelectSubset<T, LeaderboardUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardUsers and returns the data updated in the database.
     * @param {LeaderboardUserUpdateManyAndReturnArgs} args - Arguments to update many LeaderboardUsers.
     * @example
     * // Update many LeaderboardUsers
     * const leaderboardUser = await prisma.leaderboardUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderboardUsers and only return the `id`
     * const leaderboardUserWithIdOnly = await prisma.leaderboardUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderboardUserUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderboardUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderboardUser.
     * @param {LeaderboardUserUpsertArgs} args - Arguments to update or create a LeaderboardUser.
     * @example
     * // Update or create a LeaderboardUser
     * const leaderboardUser = await prisma.leaderboardUser.upsert({
     *   create: {
     *     // ... data to create a LeaderboardUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderboardUser we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardUserUpsertArgs>(args: SelectSubset<T, LeaderboardUserUpsertArgs<ExtArgs>>): Prisma__LeaderboardUserClient<$Result.GetResult<Prisma.$LeaderboardUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderboardUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUserCountArgs} args - Arguments to filter LeaderboardUsers to count.
     * @example
     * // Count the number of LeaderboardUsers
     * const count = await prisma.leaderboardUser.count({
     *   where: {
     *     // ... the filter for the LeaderboardUsers we want to count
     *   }
     * })
    **/
    count<T extends LeaderboardUserCountArgs>(
      args?: Subset<T, LeaderboardUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderboardUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderboardUserAggregateArgs>(args: Subset<T, LeaderboardUserAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardUserAggregateType<T>>

    /**
     * Group by LeaderboardUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaderboardUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardUserGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaderboardUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderboardUser model
   */
  readonly fields: LeaderboardUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderboardUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaderboardUser model
   */
  interface LeaderboardUserFieldRefs {
    readonly id: FieldRef<"LeaderboardUser", 'String'>
    readonly name: FieldRef<"LeaderboardUser", 'String'>
    readonly avatar: FieldRef<"LeaderboardUser", 'String'>
    readonly score: FieldRef<"LeaderboardUser", 'Int'>
    readonly updatedAt: FieldRef<"LeaderboardUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaderboardUser findUnique
   */
  export type LeaderboardUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardUser to fetch.
     */
    where: LeaderboardUserWhereUniqueInput
  }

  /**
   * LeaderboardUser findUniqueOrThrow
   */
  export type LeaderboardUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardUser to fetch.
     */
    where: LeaderboardUserWhereUniqueInput
  }

  /**
   * LeaderboardUser findFirst
   */
  export type LeaderboardUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardUser to fetch.
     */
    where?: LeaderboardUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardUsers to fetch.
     */
    orderBy?: LeaderboardUserOrderByWithRelationInput | LeaderboardUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardUsers.
     */
    cursor?: LeaderboardUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardUsers.
     */
    distinct?: LeaderboardUserScalarFieldEnum | LeaderboardUserScalarFieldEnum[]
  }

  /**
   * LeaderboardUser findFirstOrThrow
   */
  export type LeaderboardUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardUser to fetch.
     */
    where?: LeaderboardUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardUsers to fetch.
     */
    orderBy?: LeaderboardUserOrderByWithRelationInput | LeaderboardUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardUsers.
     */
    cursor?: LeaderboardUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardUsers.
     */
    distinct?: LeaderboardUserScalarFieldEnum | LeaderboardUserScalarFieldEnum[]
  }

  /**
   * LeaderboardUser findMany
   */
  export type LeaderboardUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * Filter, which LeaderboardUsers to fetch.
     */
    where?: LeaderboardUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardUsers to fetch.
     */
    orderBy?: LeaderboardUserOrderByWithRelationInput | LeaderboardUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderboardUsers.
     */
    cursor?: LeaderboardUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardUsers.
     */
    skip?: number
    distinct?: LeaderboardUserScalarFieldEnum | LeaderboardUserScalarFieldEnum[]
  }

  /**
   * LeaderboardUser create
   */
  export type LeaderboardUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * The data needed to create a LeaderboardUser.
     */
    data: XOR<LeaderboardUserCreateInput, LeaderboardUserUncheckedCreateInput>
  }

  /**
   * LeaderboardUser createMany
   */
  export type LeaderboardUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderboardUsers.
     */
    data: LeaderboardUserCreateManyInput | LeaderboardUserCreateManyInput[]
  }

  /**
   * LeaderboardUser createManyAndReturn
   */
  export type LeaderboardUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderboardUsers.
     */
    data: LeaderboardUserCreateManyInput | LeaderboardUserCreateManyInput[]
  }

  /**
   * LeaderboardUser update
   */
  export type LeaderboardUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * The data needed to update a LeaderboardUser.
     */
    data: XOR<LeaderboardUserUpdateInput, LeaderboardUserUncheckedUpdateInput>
    /**
     * Choose, which LeaderboardUser to update.
     */
    where: LeaderboardUserWhereUniqueInput
  }

  /**
   * LeaderboardUser updateMany
   */
  export type LeaderboardUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderboardUsers.
     */
    data: XOR<LeaderboardUserUpdateManyMutationInput, LeaderboardUserUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardUsers to update
     */
    where?: LeaderboardUserWhereInput
    /**
     * Limit how many LeaderboardUsers to update.
     */
    limit?: number
  }

  /**
   * LeaderboardUser updateManyAndReturn
   */
  export type LeaderboardUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * The data used to update LeaderboardUsers.
     */
    data: XOR<LeaderboardUserUpdateManyMutationInput, LeaderboardUserUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardUsers to update
     */
    where?: LeaderboardUserWhereInput
    /**
     * Limit how many LeaderboardUsers to update.
     */
    limit?: number
  }

  /**
   * LeaderboardUser upsert
   */
  export type LeaderboardUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * The filter to search for the LeaderboardUser to update in case it exists.
     */
    where: LeaderboardUserWhereUniqueInput
    /**
     * In case the LeaderboardUser found by the `where` argument doesn't exist, create a new LeaderboardUser with this data.
     */
    create: XOR<LeaderboardUserCreateInput, LeaderboardUserUncheckedCreateInput>
    /**
     * In case the LeaderboardUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderboardUserUpdateInput, LeaderboardUserUncheckedUpdateInput>
  }

  /**
   * LeaderboardUser delete
   */
  export type LeaderboardUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
    /**
     * Filter which LeaderboardUser to delete.
     */
    where: LeaderboardUserWhereUniqueInput
  }

  /**
   * LeaderboardUser deleteMany
   */
  export type LeaderboardUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardUsers to delete
     */
    where?: LeaderboardUserWhereInput
    /**
     * Limit how many LeaderboardUsers to delete.
     */
    limit?: number
  }

  /**
   * LeaderboardUser without action
   */
  export type LeaderboardUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardUser
     */
    select?: LeaderboardUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardUser
     */
    omit?: LeaderboardUserOmit<ExtArgs> | null
  }


  /**
   * Model ChallengeSubmission
   */

  export type AggregateChallengeSubmission = {
    _count: ChallengeSubmissionCountAggregateOutputType | null
    _min: ChallengeSubmissionMinAggregateOutputType | null
    _max: ChallengeSubmissionMaxAggregateOutputType | null
  }

  export type ChallengeSubmissionMinAggregateOutputType = {
    id: string | null
    userName: string | null
    challengeId: string | null
    selectedLines: string | null
    correct: boolean | null
    createdAt: Date | null
  }

  export type ChallengeSubmissionMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    challengeId: string | null
    selectedLines: string | null
    correct: boolean | null
    createdAt: Date | null
  }

  export type ChallengeSubmissionCountAggregateOutputType = {
    id: number
    userName: number
    challengeId: number
    selectedLines: number
    correct: number
    createdAt: number
    _all: number
  }


  export type ChallengeSubmissionMinAggregateInputType = {
    id?: true
    userName?: true
    challengeId?: true
    selectedLines?: true
    correct?: true
    createdAt?: true
  }

  export type ChallengeSubmissionMaxAggregateInputType = {
    id?: true
    userName?: true
    challengeId?: true
    selectedLines?: true
    correct?: true
    createdAt?: true
  }

  export type ChallengeSubmissionCountAggregateInputType = {
    id?: true
    userName?: true
    challengeId?: true
    selectedLines?: true
    correct?: true
    createdAt?: true
    _all?: true
  }

  export type ChallengeSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeSubmission to aggregate.
     */
    where?: ChallengeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeSubmissions to fetch.
     */
    orderBy?: ChallengeSubmissionOrderByWithRelationInput | ChallengeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeSubmissions
    **/
    _count?: true | ChallengeSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeSubmissionMaxAggregateInputType
  }

  export type GetChallengeSubmissionAggregateType<T extends ChallengeSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeSubmission[P]>
      : GetScalarType<T[P], AggregateChallengeSubmission[P]>
  }




  export type ChallengeSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeSubmissionWhereInput
    orderBy?: ChallengeSubmissionOrderByWithAggregationInput | ChallengeSubmissionOrderByWithAggregationInput[]
    by: ChallengeSubmissionScalarFieldEnum[] | ChallengeSubmissionScalarFieldEnum
    having?: ChallengeSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeSubmissionCountAggregateInputType | true
    _min?: ChallengeSubmissionMinAggregateInputType
    _max?: ChallengeSubmissionMaxAggregateInputType
  }

  export type ChallengeSubmissionGroupByOutputType = {
    id: string
    userName: string
    challengeId: string
    selectedLines: string
    correct: boolean
    createdAt: Date
    _count: ChallengeSubmissionCountAggregateOutputType | null
    _min: ChallengeSubmissionMinAggregateOutputType | null
    _max: ChallengeSubmissionMaxAggregateOutputType | null
  }

  type GetChallengeSubmissionGroupByPayload<T extends ChallengeSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    selectedLines?: boolean
    correct?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["challengeSubmission"]>

  export type ChallengeSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    selectedLines?: boolean
    correct?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["challengeSubmission"]>

  export type ChallengeSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    selectedLines?: boolean
    correct?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["challengeSubmission"]>

  export type ChallengeSubmissionSelectScalar = {
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    selectedLines?: boolean
    correct?: boolean
    createdAt?: boolean
  }

  export type ChallengeSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "challengeId" | "selectedLines" | "correct" | "createdAt", ExtArgs["result"]["challengeSubmission"]>

  export type $ChallengeSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      challengeId: string
      selectedLines: string
      correct: boolean
      createdAt: Date
    }, ExtArgs["result"]["challengeSubmission"]>
    composites: {}
  }

  type ChallengeSubmissionGetPayload<S extends boolean | null | undefined | ChallengeSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ChallengeSubmissionPayload, S>

  type ChallengeSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeSubmissionCountAggregateInputType | true
    }

  export interface ChallengeSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeSubmission'], meta: { name: 'ChallengeSubmission' } }
    /**
     * Find zero or one ChallengeSubmission that matches the filter.
     * @param {ChallengeSubmissionFindUniqueArgs} args - Arguments to find a ChallengeSubmission
     * @example
     * // Get one ChallengeSubmission
     * const challengeSubmission = await prisma.challengeSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeSubmissionFindUniqueArgs>(args: SelectSubset<T, ChallengeSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ChallengeSubmission
     * @example
     * // Get one ChallengeSubmission
     * const challengeSubmission = await prisma.challengeSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeSubmissionFindFirstArgs} args - Arguments to find a ChallengeSubmission
     * @example
     * // Get one ChallengeSubmission
     * const challengeSubmission = await prisma.challengeSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeSubmissionFindFirstArgs>(args?: SelectSubset<T, ChallengeSubmissionFindFirstArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeSubmissionFindFirstOrThrowArgs} args - Arguments to find a ChallengeSubmission
     * @example
     * // Get one ChallengeSubmission
     * const challengeSubmission = await prisma.challengeSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeSubmissions
     * const challengeSubmissions = await prisma.challengeSubmission.findMany()
     * 
     * // Get first 10 ChallengeSubmissions
     * const challengeSubmissions = await prisma.challengeSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeSubmissionWithIdOnly = await prisma.challengeSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeSubmissionFindManyArgs>(args?: SelectSubset<T, ChallengeSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeSubmission.
     * @param {ChallengeSubmissionCreateArgs} args - Arguments to create a ChallengeSubmission.
     * @example
     * // Create one ChallengeSubmission
     * const ChallengeSubmission = await prisma.challengeSubmission.create({
     *   data: {
     *     // ... data to create a ChallengeSubmission
     *   }
     * })
     * 
     */
    create<T extends ChallengeSubmissionCreateArgs>(args: SelectSubset<T, ChallengeSubmissionCreateArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeSubmissions.
     * @param {ChallengeSubmissionCreateManyArgs} args - Arguments to create many ChallengeSubmissions.
     * @example
     * // Create many ChallengeSubmissions
     * const challengeSubmission = await prisma.challengeSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeSubmissionCreateManyArgs>(args?: SelectSubset<T, ChallengeSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeSubmissions and returns the data saved in the database.
     * @param {ChallengeSubmissionCreateManyAndReturnArgs} args - Arguments to create many ChallengeSubmissions.
     * @example
     * // Create many ChallengeSubmissions
     * const challengeSubmission = await prisma.challengeSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeSubmissions and only return the `id`
     * const challengeSubmissionWithIdOnly = await prisma.challengeSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeSubmission.
     * @param {ChallengeSubmissionDeleteArgs} args - Arguments to delete one ChallengeSubmission.
     * @example
     * // Delete one ChallengeSubmission
     * const ChallengeSubmission = await prisma.challengeSubmission.delete({
     *   where: {
     *     // ... filter to delete one ChallengeSubmission
     *   }
     * })
     * 
     */
    delete<T extends ChallengeSubmissionDeleteArgs>(args: SelectSubset<T, ChallengeSubmissionDeleteArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeSubmission.
     * @param {ChallengeSubmissionUpdateArgs} args - Arguments to update one ChallengeSubmission.
     * @example
     * // Update one ChallengeSubmission
     * const challengeSubmission = await prisma.challengeSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeSubmissionUpdateArgs>(args: SelectSubset<T, ChallengeSubmissionUpdateArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeSubmissions.
     * @param {ChallengeSubmissionDeleteManyArgs} args - Arguments to filter ChallengeSubmissions to delete.
     * @example
     * // Delete a few ChallengeSubmissions
     * const { count } = await prisma.challengeSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeSubmissionDeleteManyArgs>(args?: SelectSubset<T, ChallengeSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeSubmissions
     * const challengeSubmission = await prisma.challengeSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeSubmissionUpdateManyArgs>(args: SelectSubset<T, ChallengeSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeSubmissions and returns the data updated in the database.
     * @param {ChallengeSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ChallengeSubmissions.
     * @example
     * // Update many ChallengeSubmissions
     * const challengeSubmission = await prisma.challengeSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeSubmissions and only return the `id`
     * const challengeSubmissionWithIdOnly = await prisma.challengeSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChallengeSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeSubmission.
     * @param {ChallengeSubmissionUpsertArgs} args - Arguments to update or create a ChallengeSubmission.
     * @example
     * // Update or create a ChallengeSubmission
     * const challengeSubmission = await prisma.challengeSubmission.upsert({
     *   create: {
     *     // ... data to create a ChallengeSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeSubmissionUpsertArgs>(args: SelectSubset<T, ChallengeSubmissionUpsertArgs<ExtArgs>>): Prisma__ChallengeSubmissionClient<$Result.GetResult<Prisma.$ChallengeSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeSubmissionCountArgs} args - Arguments to filter ChallengeSubmissions to count.
     * @example
     * // Count the number of ChallengeSubmissions
     * const count = await prisma.challengeSubmission.count({
     *   where: {
     *     // ... the filter for the ChallengeSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ChallengeSubmissionCountArgs>(
      args?: Subset<T, ChallengeSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeSubmissionAggregateArgs>(args: Subset<T, ChallengeSubmissionAggregateArgs>): Prisma.PrismaPromise<GetChallengeSubmissionAggregateType<T>>

    /**
     * Group by ChallengeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeSubmission model
   */
  readonly fields: ChallengeSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChallengeSubmission model
   */
  interface ChallengeSubmissionFieldRefs {
    readonly id: FieldRef<"ChallengeSubmission", 'String'>
    readonly userName: FieldRef<"ChallengeSubmission", 'String'>
    readonly challengeId: FieldRef<"ChallengeSubmission", 'String'>
    readonly selectedLines: FieldRef<"ChallengeSubmission", 'String'>
    readonly correct: FieldRef<"ChallengeSubmission", 'Boolean'>
    readonly createdAt: FieldRef<"ChallengeSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeSubmission findUnique
   */
  export type ChallengeSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeSubmission to fetch.
     */
    where: ChallengeSubmissionWhereUniqueInput
  }

  /**
   * ChallengeSubmission findUniqueOrThrow
   */
  export type ChallengeSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeSubmission to fetch.
     */
    where: ChallengeSubmissionWhereUniqueInput
  }

  /**
   * ChallengeSubmission findFirst
   */
  export type ChallengeSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeSubmission to fetch.
     */
    where?: ChallengeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeSubmissions to fetch.
     */
    orderBy?: ChallengeSubmissionOrderByWithRelationInput | ChallengeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeSubmissions.
     */
    cursor?: ChallengeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeSubmissions.
     */
    distinct?: ChallengeSubmissionScalarFieldEnum | ChallengeSubmissionScalarFieldEnum[]
  }

  /**
   * ChallengeSubmission findFirstOrThrow
   */
  export type ChallengeSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeSubmission to fetch.
     */
    where?: ChallengeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeSubmissions to fetch.
     */
    orderBy?: ChallengeSubmissionOrderByWithRelationInput | ChallengeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeSubmissions.
     */
    cursor?: ChallengeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeSubmissions.
     */
    distinct?: ChallengeSubmissionScalarFieldEnum | ChallengeSubmissionScalarFieldEnum[]
  }

  /**
   * ChallengeSubmission findMany
   */
  export type ChallengeSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ChallengeSubmissions to fetch.
     */
    where?: ChallengeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeSubmissions to fetch.
     */
    orderBy?: ChallengeSubmissionOrderByWithRelationInput | ChallengeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeSubmissions.
     */
    cursor?: ChallengeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeSubmissions.
     */
    skip?: number
    distinct?: ChallengeSubmissionScalarFieldEnum | ChallengeSubmissionScalarFieldEnum[]
  }

  /**
   * ChallengeSubmission create
   */
  export type ChallengeSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ChallengeSubmission.
     */
    data: XOR<ChallengeSubmissionCreateInput, ChallengeSubmissionUncheckedCreateInput>
  }

  /**
   * ChallengeSubmission createMany
   */
  export type ChallengeSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeSubmissions.
     */
    data: ChallengeSubmissionCreateManyInput | ChallengeSubmissionCreateManyInput[]
  }

  /**
   * ChallengeSubmission createManyAndReturn
   */
  export type ChallengeSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeSubmissions.
     */
    data: ChallengeSubmissionCreateManyInput | ChallengeSubmissionCreateManyInput[]
  }

  /**
   * ChallengeSubmission update
   */
  export type ChallengeSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ChallengeSubmission.
     */
    data: XOR<ChallengeSubmissionUpdateInput, ChallengeSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ChallengeSubmission to update.
     */
    where: ChallengeSubmissionWhereUniqueInput
  }

  /**
   * ChallengeSubmission updateMany
   */
  export type ChallengeSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeSubmissions.
     */
    data: XOR<ChallengeSubmissionUpdateManyMutationInput, ChallengeSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeSubmissions to update
     */
    where?: ChallengeSubmissionWhereInput
    /**
     * Limit how many ChallengeSubmissions to update.
     */
    limit?: number
  }

  /**
   * ChallengeSubmission updateManyAndReturn
   */
  export type ChallengeSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeSubmissions.
     */
    data: XOR<ChallengeSubmissionUpdateManyMutationInput, ChallengeSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeSubmissions to update
     */
    where?: ChallengeSubmissionWhereInput
    /**
     * Limit how many ChallengeSubmissions to update.
     */
    limit?: number
  }

  /**
   * ChallengeSubmission upsert
   */
  export type ChallengeSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ChallengeSubmission to update in case it exists.
     */
    where: ChallengeSubmissionWhereUniqueInput
    /**
     * In case the ChallengeSubmission found by the `where` argument doesn't exist, create a new ChallengeSubmission with this data.
     */
    create: XOR<ChallengeSubmissionCreateInput, ChallengeSubmissionUncheckedCreateInput>
    /**
     * In case the ChallengeSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeSubmissionUpdateInput, ChallengeSubmissionUncheckedUpdateInput>
  }

  /**
   * ChallengeSubmission delete
   */
  export type ChallengeSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ChallengeSubmission to delete.
     */
    where: ChallengeSubmissionWhereUniqueInput
  }

  /**
   * ChallengeSubmission deleteMany
   */
  export type ChallengeSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeSubmissions to delete
     */
    where?: ChallengeSubmissionWhereInput
    /**
     * Limit how many ChallengeSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ChallengeSubmission without action
   */
  export type ChallengeSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeSubmission
     */
    select?: ChallengeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeSubmission
     */
    omit?: ChallengeSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model FlagSubmission
   */

  export type AggregateFlagSubmission = {
    _count: FlagSubmissionCountAggregateOutputType | null
    _min: FlagSubmissionMinAggregateOutputType | null
    _max: FlagSubmissionMaxAggregateOutputType | null
  }

  export type FlagSubmissionMinAggregateOutputType = {
    id: string | null
    userName: string | null
    challengeId: string | null
    flag: string | null
    correct: boolean | null
    createdAt: Date | null
  }

  export type FlagSubmissionMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    challengeId: string | null
    flag: string | null
    correct: boolean | null
    createdAt: Date | null
  }

  export type FlagSubmissionCountAggregateOutputType = {
    id: number
    userName: number
    challengeId: number
    flag: number
    correct: number
    createdAt: number
    _all: number
  }


  export type FlagSubmissionMinAggregateInputType = {
    id?: true
    userName?: true
    challengeId?: true
    flag?: true
    correct?: true
    createdAt?: true
  }

  export type FlagSubmissionMaxAggregateInputType = {
    id?: true
    userName?: true
    challengeId?: true
    flag?: true
    correct?: true
    createdAt?: true
  }

  export type FlagSubmissionCountAggregateInputType = {
    id?: true
    userName?: true
    challengeId?: true
    flag?: true
    correct?: true
    createdAt?: true
    _all?: true
  }

  export type FlagSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlagSubmission to aggregate.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlagSubmissions
    **/
    _count?: true | FlagSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagSubmissionMaxAggregateInputType
  }

  export type GetFlagSubmissionAggregateType<T extends FlagSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateFlagSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlagSubmission[P]>
      : GetScalarType<T[P], AggregateFlagSubmission[P]>
  }




  export type FlagSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagSubmissionWhereInput
    orderBy?: FlagSubmissionOrderByWithAggregationInput | FlagSubmissionOrderByWithAggregationInput[]
    by: FlagSubmissionScalarFieldEnum[] | FlagSubmissionScalarFieldEnum
    having?: FlagSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagSubmissionCountAggregateInputType | true
    _min?: FlagSubmissionMinAggregateInputType
    _max?: FlagSubmissionMaxAggregateInputType
  }

  export type FlagSubmissionGroupByOutputType = {
    id: string
    userName: string
    challengeId: string
    flag: string
    correct: boolean
    createdAt: Date
    _count: FlagSubmissionCountAggregateOutputType | null
    _min: FlagSubmissionMinAggregateOutputType | null
    _max: FlagSubmissionMaxAggregateOutputType | null
  }

  type GetFlagSubmissionGroupByPayload<T extends FlagSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlagSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], FlagSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type FlagSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    flag?: boolean
    correct?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["flagSubmission"]>

  export type FlagSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    flag?: boolean
    correct?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["flagSubmission"]>

  export type FlagSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    flag?: boolean
    correct?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["flagSubmission"]>

  export type FlagSubmissionSelectScalar = {
    id?: boolean
    userName?: boolean
    challengeId?: boolean
    flag?: boolean
    correct?: boolean
    createdAt?: boolean
  }

  export type FlagSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "challengeId" | "flag" | "correct" | "createdAt", ExtArgs["result"]["flagSubmission"]>

  export type $FlagSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlagSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      challengeId: string
      flag: string
      correct: boolean
      createdAt: Date
    }, ExtArgs["result"]["flagSubmission"]>
    composites: {}
  }

  type FlagSubmissionGetPayload<S extends boolean | null | undefined | FlagSubmissionDefaultArgs> = $Result.GetResult<Prisma.$FlagSubmissionPayload, S>

  type FlagSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlagSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlagSubmissionCountAggregateInputType | true
    }

  export interface FlagSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlagSubmission'], meta: { name: 'FlagSubmission' } }
    /**
     * Find zero or one FlagSubmission that matches the filter.
     * @param {FlagSubmissionFindUniqueArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlagSubmissionFindUniqueArgs>(args: SelectSubset<T, FlagSubmissionFindUniqueArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlagSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlagSubmissionFindUniqueOrThrowArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlagSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, FlagSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlagSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionFindFirstArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlagSubmissionFindFirstArgs>(args?: SelectSubset<T, FlagSubmissionFindFirstArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlagSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionFindFirstOrThrowArgs} args - Arguments to find a FlagSubmission
     * @example
     * // Get one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlagSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, FlagSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlagSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlagSubmissions
     * const flagSubmissions = await prisma.flagSubmission.findMany()
     * 
     * // Get first 10 FlagSubmissions
     * const flagSubmissions = await prisma.flagSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flagSubmissionWithIdOnly = await prisma.flagSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlagSubmissionFindManyArgs>(args?: SelectSubset<T, FlagSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlagSubmission.
     * @param {FlagSubmissionCreateArgs} args - Arguments to create a FlagSubmission.
     * @example
     * // Create one FlagSubmission
     * const FlagSubmission = await prisma.flagSubmission.create({
     *   data: {
     *     // ... data to create a FlagSubmission
     *   }
     * })
     * 
     */
    create<T extends FlagSubmissionCreateArgs>(args: SelectSubset<T, FlagSubmissionCreateArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlagSubmissions.
     * @param {FlagSubmissionCreateManyArgs} args - Arguments to create many FlagSubmissions.
     * @example
     * // Create many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlagSubmissionCreateManyArgs>(args?: SelectSubset<T, FlagSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlagSubmissions and returns the data saved in the database.
     * @param {FlagSubmissionCreateManyAndReturnArgs} args - Arguments to create many FlagSubmissions.
     * @example
     * // Create many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlagSubmissions and only return the `id`
     * const flagSubmissionWithIdOnly = await prisma.flagSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlagSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, FlagSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlagSubmission.
     * @param {FlagSubmissionDeleteArgs} args - Arguments to delete one FlagSubmission.
     * @example
     * // Delete one FlagSubmission
     * const FlagSubmission = await prisma.flagSubmission.delete({
     *   where: {
     *     // ... filter to delete one FlagSubmission
     *   }
     * })
     * 
     */
    delete<T extends FlagSubmissionDeleteArgs>(args: SelectSubset<T, FlagSubmissionDeleteArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlagSubmission.
     * @param {FlagSubmissionUpdateArgs} args - Arguments to update one FlagSubmission.
     * @example
     * // Update one FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlagSubmissionUpdateArgs>(args: SelectSubset<T, FlagSubmissionUpdateArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlagSubmissions.
     * @param {FlagSubmissionDeleteManyArgs} args - Arguments to filter FlagSubmissions to delete.
     * @example
     * // Delete a few FlagSubmissions
     * const { count } = await prisma.flagSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlagSubmissionDeleteManyArgs>(args?: SelectSubset<T, FlagSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlagSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlagSubmissionUpdateManyArgs>(args: SelectSubset<T, FlagSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlagSubmissions and returns the data updated in the database.
     * @param {FlagSubmissionUpdateManyAndReturnArgs} args - Arguments to update many FlagSubmissions.
     * @example
     * // Update many FlagSubmissions
     * const flagSubmission = await prisma.flagSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlagSubmissions and only return the `id`
     * const flagSubmissionWithIdOnly = await prisma.flagSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlagSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, FlagSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlagSubmission.
     * @param {FlagSubmissionUpsertArgs} args - Arguments to update or create a FlagSubmission.
     * @example
     * // Update or create a FlagSubmission
     * const flagSubmission = await prisma.flagSubmission.upsert({
     *   create: {
     *     // ... data to create a FlagSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlagSubmission we want to update
     *   }
     * })
     */
    upsert<T extends FlagSubmissionUpsertArgs>(args: SelectSubset<T, FlagSubmissionUpsertArgs<ExtArgs>>): Prisma__FlagSubmissionClient<$Result.GetResult<Prisma.$FlagSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlagSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionCountArgs} args - Arguments to filter FlagSubmissions to count.
     * @example
     * // Count the number of FlagSubmissions
     * const count = await prisma.flagSubmission.count({
     *   where: {
     *     // ... the filter for the FlagSubmissions we want to count
     *   }
     * })
    **/
    count<T extends FlagSubmissionCountArgs>(
      args?: Subset<T, FlagSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlagSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlagSubmissionAggregateArgs>(args: Subset<T, FlagSubmissionAggregateArgs>): Prisma.PrismaPromise<GetFlagSubmissionAggregateType<T>>

    /**
     * Group by FlagSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlagSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: FlagSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlagSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlagSubmission model
   */
  readonly fields: FlagSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlagSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlagSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlagSubmission model
   */
  interface FlagSubmissionFieldRefs {
    readonly id: FieldRef<"FlagSubmission", 'String'>
    readonly userName: FieldRef<"FlagSubmission", 'String'>
    readonly challengeId: FieldRef<"FlagSubmission", 'String'>
    readonly flag: FieldRef<"FlagSubmission", 'String'>
    readonly correct: FieldRef<"FlagSubmission", 'Boolean'>
    readonly createdAt: FieldRef<"FlagSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlagSubmission findUnique
   */
  export type FlagSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission findUniqueOrThrow
   */
  export type FlagSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission findFirst
   */
  export type FlagSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlagSubmissions.
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlagSubmissions.
     */
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * FlagSubmission findFirstOrThrow
   */
  export type FlagSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FlagSubmission to fetch.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlagSubmissions.
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlagSubmissions.
     */
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * FlagSubmission findMany
   */
  export type FlagSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which FlagSubmissions to fetch.
     */
    where?: FlagSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlagSubmissions to fetch.
     */
    orderBy?: FlagSubmissionOrderByWithRelationInput | FlagSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlagSubmissions.
     */
    cursor?: FlagSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlagSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlagSubmissions.
     */
    skip?: number
    distinct?: FlagSubmissionScalarFieldEnum | FlagSubmissionScalarFieldEnum[]
  }

  /**
   * FlagSubmission create
   */
  export type FlagSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a FlagSubmission.
     */
    data: XOR<FlagSubmissionCreateInput, FlagSubmissionUncheckedCreateInput>
  }

  /**
   * FlagSubmission createMany
   */
  export type FlagSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlagSubmissions.
     */
    data: FlagSubmissionCreateManyInput | FlagSubmissionCreateManyInput[]
  }

  /**
   * FlagSubmission createManyAndReturn
   */
  export type FlagSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many FlagSubmissions.
     */
    data: FlagSubmissionCreateManyInput | FlagSubmissionCreateManyInput[]
  }

  /**
   * FlagSubmission update
   */
  export type FlagSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a FlagSubmission.
     */
    data: XOR<FlagSubmissionUpdateInput, FlagSubmissionUncheckedUpdateInput>
    /**
     * Choose, which FlagSubmission to update.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission updateMany
   */
  export type FlagSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlagSubmissions.
     */
    data: XOR<FlagSubmissionUpdateManyMutationInput, FlagSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FlagSubmissions to update
     */
    where?: FlagSubmissionWhereInput
    /**
     * Limit how many FlagSubmissions to update.
     */
    limit?: number
  }

  /**
   * FlagSubmission updateManyAndReturn
   */
  export type FlagSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update FlagSubmissions.
     */
    data: XOR<FlagSubmissionUpdateManyMutationInput, FlagSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which FlagSubmissions to update
     */
    where?: FlagSubmissionWhereInput
    /**
     * Limit how many FlagSubmissions to update.
     */
    limit?: number
  }

  /**
   * FlagSubmission upsert
   */
  export type FlagSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the FlagSubmission to update in case it exists.
     */
    where: FlagSubmissionWhereUniqueInput
    /**
     * In case the FlagSubmission found by the `where` argument doesn't exist, create a new FlagSubmission with this data.
     */
    create: XOR<FlagSubmissionCreateInput, FlagSubmissionUncheckedCreateInput>
    /**
     * In case the FlagSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlagSubmissionUpdateInput, FlagSubmissionUncheckedUpdateInput>
  }

  /**
   * FlagSubmission delete
   */
  export type FlagSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
    /**
     * Filter which FlagSubmission to delete.
     */
    where: FlagSubmissionWhereUniqueInput
  }

  /**
   * FlagSubmission deleteMany
   */
  export type FlagSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlagSubmissions to delete
     */
    where?: FlagSubmissionWhereInput
    /**
     * Limit how many FlagSubmissions to delete.
     */
    limit?: number
  }

  /**
   * FlagSubmission without action
   */
  export type FlagSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlagSubmission
     */
    select?: FlagSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlagSubmission
     */
    omit?: FlagSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model SessionArchive
   */

  export type AggregateSessionArchive = {
    _count: SessionArchiveCountAggregateOutputType | null
    _avg: SessionArchiveAvgAggregateOutputType | null
    _sum: SessionArchiveSumAggregateOutputType | null
    _min: SessionArchiveMinAggregateOutputType | null
    _max: SessionArchiveMaxAggregateOutputType | null
  }

  export type SessionArchiveAvgAggregateOutputType = {
    score: number | null
  }

  export type SessionArchiveSumAggregateOutputType = {
    score: number | null
  }

  export type SessionArchiveMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    teamName: string | null
    archivedAt: Date | null
    userName: string | null
    avatar: string | null
    score: number | null
  }

  export type SessionArchiveMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    teamName: string | null
    archivedAt: Date | null
    userName: string | null
    avatar: string | null
    score: number | null
  }

  export type SessionArchiveCountAggregateOutputType = {
    id: number
    sessionId: number
    teamName: number
    archivedAt: number
    userName: number
    avatar: number
    score: number
    _all: number
  }


  export type SessionArchiveAvgAggregateInputType = {
    score?: true
  }

  export type SessionArchiveSumAggregateInputType = {
    score?: true
  }

  export type SessionArchiveMinAggregateInputType = {
    id?: true
    sessionId?: true
    teamName?: true
    archivedAt?: true
    userName?: true
    avatar?: true
    score?: true
  }

  export type SessionArchiveMaxAggregateInputType = {
    id?: true
    sessionId?: true
    teamName?: true
    archivedAt?: true
    userName?: true
    avatar?: true
    score?: true
  }

  export type SessionArchiveCountAggregateInputType = {
    id?: true
    sessionId?: true
    teamName?: true
    archivedAt?: true
    userName?: true
    avatar?: true
    score?: true
    _all?: true
  }

  export type SessionArchiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionArchive to aggregate.
     */
    where?: SessionArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionArchives to fetch.
     */
    orderBy?: SessionArchiveOrderByWithRelationInput | SessionArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionArchives
    **/
    _count?: true | SessionArchiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionArchiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionArchiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionArchiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionArchiveMaxAggregateInputType
  }

  export type GetSessionArchiveAggregateType<T extends SessionArchiveAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionArchive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionArchive[P]>
      : GetScalarType<T[P], AggregateSessionArchive[P]>
  }




  export type SessionArchiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionArchiveWhereInput
    orderBy?: SessionArchiveOrderByWithAggregationInput | SessionArchiveOrderByWithAggregationInput[]
    by: SessionArchiveScalarFieldEnum[] | SessionArchiveScalarFieldEnum
    having?: SessionArchiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionArchiveCountAggregateInputType | true
    _avg?: SessionArchiveAvgAggregateInputType
    _sum?: SessionArchiveSumAggregateInputType
    _min?: SessionArchiveMinAggregateInputType
    _max?: SessionArchiveMaxAggregateInputType
  }

  export type SessionArchiveGroupByOutputType = {
    id: string
    sessionId: string
    teamName: string
    archivedAt: Date
    userName: string
    avatar: string
    score: number
    _count: SessionArchiveCountAggregateOutputType | null
    _avg: SessionArchiveAvgAggregateOutputType | null
    _sum: SessionArchiveSumAggregateOutputType | null
    _min: SessionArchiveMinAggregateOutputType | null
    _max: SessionArchiveMaxAggregateOutputType | null
  }

  type GetSessionArchiveGroupByPayload<T extends SessionArchiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionArchiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionArchiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionArchiveGroupByOutputType[P]>
            : GetScalarType<T[P], SessionArchiveGroupByOutputType[P]>
        }
      >
    >


  export type SessionArchiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    teamName?: boolean
    archivedAt?: boolean
    userName?: boolean
    avatar?: boolean
    score?: boolean
  }, ExtArgs["result"]["sessionArchive"]>

  export type SessionArchiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    teamName?: boolean
    archivedAt?: boolean
    userName?: boolean
    avatar?: boolean
    score?: boolean
  }, ExtArgs["result"]["sessionArchive"]>

  export type SessionArchiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    teamName?: boolean
    archivedAt?: boolean
    userName?: boolean
    avatar?: boolean
    score?: boolean
  }, ExtArgs["result"]["sessionArchive"]>

  export type SessionArchiveSelectScalar = {
    id?: boolean
    sessionId?: boolean
    teamName?: boolean
    archivedAt?: boolean
    userName?: boolean
    avatar?: boolean
    score?: boolean
  }

  export type SessionArchiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "teamName" | "archivedAt" | "userName" | "avatar" | "score", ExtArgs["result"]["sessionArchive"]>

  export type $SessionArchivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionArchive"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      teamName: string
      archivedAt: Date
      userName: string
      avatar: string
      score: number
    }, ExtArgs["result"]["sessionArchive"]>
    composites: {}
  }

  type SessionArchiveGetPayload<S extends boolean | null | undefined | SessionArchiveDefaultArgs> = $Result.GetResult<Prisma.$SessionArchivePayload, S>

  type SessionArchiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionArchiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionArchiveCountAggregateInputType | true
    }

  export interface SessionArchiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionArchive'], meta: { name: 'SessionArchive' } }
    /**
     * Find zero or one SessionArchive that matches the filter.
     * @param {SessionArchiveFindUniqueArgs} args - Arguments to find a SessionArchive
     * @example
     * // Get one SessionArchive
     * const sessionArchive = await prisma.sessionArchive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionArchiveFindUniqueArgs>(args: SelectSubset<T, SessionArchiveFindUniqueArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionArchive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionArchiveFindUniqueOrThrowArgs} args - Arguments to find a SessionArchive
     * @example
     * // Get one SessionArchive
     * const sessionArchive = await prisma.sessionArchive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionArchiveFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionArchiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionArchive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionArchiveFindFirstArgs} args - Arguments to find a SessionArchive
     * @example
     * // Get one SessionArchive
     * const sessionArchive = await prisma.sessionArchive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionArchiveFindFirstArgs>(args?: SelectSubset<T, SessionArchiveFindFirstArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionArchive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionArchiveFindFirstOrThrowArgs} args - Arguments to find a SessionArchive
     * @example
     * // Get one SessionArchive
     * const sessionArchive = await prisma.sessionArchive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionArchiveFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionArchiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionArchives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionArchiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionArchives
     * const sessionArchives = await prisma.sessionArchive.findMany()
     * 
     * // Get first 10 SessionArchives
     * const sessionArchives = await prisma.sessionArchive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionArchiveWithIdOnly = await prisma.sessionArchive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionArchiveFindManyArgs>(args?: SelectSubset<T, SessionArchiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionArchive.
     * @param {SessionArchiveCreateArgs} args - Arguments to create a SessionArchive.
     * @example
     * // Create one SessionArchive
     * const SessionArchive = await prisma.sessionArchive.create({
     *   data: {
     *     // ... data to create a SessionArchive
     *   }
     * })
     * 
     */
    create<T extends SessionArchiveCreateArgs>(args: SelectSubset<T, SessionArchiveCreateArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionArchives.
     * @param {SessionArchiveCreateManyArgs} args - Arguments to create many SessionArchives.
     * @example
     * // Create many SessionArchives
     * const sessionArchive = await prisma.sessionArchive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionArchiveCreateManyArgs>(args?: SelectSubset<T, SessionArchiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionArchives and returns the data saved in the database.
     * @param {SessionArchiveCreateManyAndReturnArgs} args - Arguments to create many SessionArchives.
     * @example
     * // Create many SessionArchives
     * const sessionArchive = await prisma.sessionArchive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionArchives and only return the `id`
     * const sessionArchiveWithIdOnly = await prisma.sessionArchive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionArchiveCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionArchiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionArchive.
     * @param {SessionArchiveDeleteArgs} args - Arguments to delete one SessionArchive.
     * @example
     * // Delete one SessionArchive
     * const SessionArchive = await prisma.sessionArchive.delete({
     *   where: {
     *     // ... filter to delete one SessionArchive
     *   }
     * })
     * 
     */
    delete<T extends SessionArchiveDeleteArgs>(args: SelectSubset<T, SessionArchiveDeleteArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionArchive.
     * @param {SessionArchiveUpdateArgs} args - Arguments to update one SessionArchive.
     * @example
     * // Update one SessionArchive
     * const sessionArchive = await prisma.sessionArchive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionArchiveUpdateArgs>(args: SelectSubset<T, SessionArchiveUpdateArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionArchives.
     * @param {SessionArchiveDeleteManyArgs} args - Arguments to filter SessionArchives to delete.
     * @example
     * // Delete a few SessionArchives
     * const { count } = await prisma.sessionArchive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionArchiveDeleteManyArgs>(args?: SelectSubset<T, SessionArchiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionArchiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionArchives
     * const sessionArchive = await prisma.sessionArchive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionArchiveUpdateManyArgs>(args: SelectSubset<T, SessionArchiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionArchives and returns the data updated in the database.
     * @param {SessionArchiveUpdateManyAndReturnArgs} args - Arguments to update many SessionArchives.
     * @example
     * // Update many SessionArchives
     * const sessionArchive = await prisma.sessionArchive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionArchives and only return the `id`
     * const sessionArchiveWithIdOnly = await prisma.sessionArchive.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionArchiveUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionArchiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionArchive.
     * @param {SessionArchiveUpsertArgs} args - Arguments to update or create a SessionArchive.
     * @example
     * // Update or create a SessionArchive
     * const sessionArchive = await prisma.sessionArchive.upsert({
     *   create: {
     *     // ... data to create a SessionArchive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionArchive we want to update
     *   }
     * })
     */
    upsert<T extends SessionArchiveUpsertArgs>(args: SelectSubset<T, SessionArchiveUpsertArgs<ExtArgs>>): Prisma__SessionArchiveClient<$Result.GetResult<Prisma.$SessionArchivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionArchives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionArchiveCountArgs} args - Arguments to filter SessionArchives to count.
     * @example
     * // Count the number of SessionArchives
     * const count = await prisma.sessionArchive.count({
     *   where: {
     *     // ... the filter for the SessionArchives we want to count
     *   }
     * })
    **/
    count<T extends SessionArchiveCountArgs>(
      args?: Subset<T, SessionArchiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionArchiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionArchiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionArchiveAggregateArgs>(args: Subset<T, SessionArchiveAggregateArgs>): Prisma.PrismaPromise<GetSessionArchiveAggregateType<T>>

    /**
     * Group by SessionArchive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionArchiveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionArchiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionArchiveGroupByArgs['orderBy'] }
        : { orderBy?: SessionArchiveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionArchiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionArchiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionArchive model
   */
  readonly fields: SessionArchiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionArchive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionArchiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionArchive model
   */
  interface SessionArchiveFieldRefs {
    readonly id: FieldRef<"SessionArchive", 'String'>
    readonly sessionId: FieldRef<"SessionArchive", 'String'>
    readonly teamName: FieldRef<"SessionArchive", 'String'>
    readonly archivedAt: FieldRef<"SessionArchive", 'DateTime'>
    readonly userName: FieldRef<"SessionArchive", 'String'>
    readonly avatar: FieldRef<"SessionArchive", 'String'>
    readonly score: FieldRef<"SessionArchive", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SessionArchive findUnique
   */
  export type SessionArchiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * Filter, which SessionArchive to fetch.
     */
    where: SessionArchiveWhereUniqueInput
  }

  /**
   * SessionArchive findUniqueOrThrow
   */
  export type SessionArchiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * Filter, which SessionArchive to fetch.
     */
    where: SessionArchiveWhereUniqueInput
  }

  /**
   * SessionArchive findFirst
   */
  export type SessionArchiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * Filter, which SessionArchive to fetch.
     */
    where?: SessionArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionArchives to fetch.
     */
    orderBy?: SessionArchiveOrderByWithRelationInput | SessionArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionArchives.
     */
    cursor?: SessionArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionArchives.
     */
    distinct?: SessionArchiveScalarFieldEnum | SessionArchiveScalarFieldEnum[]
  }

  /**
   * SessionArchive findFirstOrThrow
   */
  export type SessionArchiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * Filter, which SessionArchive to fetch.
     */
    where?: SessionArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionArchives to fetch.
     */
    orderBy?: SessionArchiveOrderByWithRelationInput | SessionArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionArchives.
     */
    cursor?: SessionArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionArchives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionArchives.
     */
    distinct?: SessionArchiveScalarFieldEnum | SessionArchiveScalarFieldEnum[]
  }

  /**
   * SessionArchive findMany
   */
  export type SessionArchiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * Filter, which SessionArchives to fetch.
     */
    where?: SessionArchiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionArchives to fetch.
     */
    orderBy?: SessionArchiveOrderByWithRelationInput | SessionArchiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionArchives.
     */
    cursor?: SessionArchiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionArchives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionArchives.
     */
    skip?: number
    distinct?: SessionArchiveScalarFieldEnum | SessionArchiveScalarFieldEnum[]
  }

  /**
   * SessionArchive create
   */
  export type SessionArchiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * The data needed to create a SessionArchive.
     */
    data: XOR<SessionArchiveCreateInput, SessionArchiveUncheckedCreateInput>
  }

  /**
   * SessionArchive createMany
   */
  export type SessionArchiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionArchives.
     */
    data: SessionArchiveCreateManyInput | SessionArchiveCreateManyInput[]
  }

  /**
   * SessionArchive createManyAndReturn
   */
  export type SessionArchiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * The data used to create many SessionArchives.
     */
    data: SessionArchiveCreateManyInput | SessionArchiveCreateManyInput[]
  }

  /**
   * SessionArchive update
   */
  export type SessionArchiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * The data needed to update a SessionArchive.
     */
    data: XOR<SessionArchiveUpdateInput, SessionArchiveUncheckedUpdateInput>
    /**
     * Choose, which SessionArchive to update.
     */
    where: SessionArchiveWhereUniqueInput
  }

  /**
   * SessionArchive updateMany
   */
  export type SessionArchiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionArchives.
     */
    data: XOR<SessionArchiveUpdateManyMutationInput, SessionArchiveUncheckedUpdateManyInput>
    /**
     * Filter which SessionArchives to update
     */
    where?: SessionArchiveWhereInput
    /**
     * Limit how many SessionArchives to update.
     */
    limit?: number
  }

  /**
   * SessionArchive updateManyAndReturn
   */
  export type SessionArchiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * The data used to update SessionArchives.
     */
    data: XOR<SessionArchiveUpdateManyMutationInput, SessionArchiveUncheckedUpdateManyInput>
    /**
     * Filter which SessionArchives to update
     */
    where?: SessionArchiveWhereInput
    /**
     * Limit how many SessionArchives to update.
     */
    limit?: number
  }

  /**
   * SessionArchive upsert
   */
  export type SessionArchiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * The filter to search for the SessionArchive to update in case it exists.
     */
    where: SessionArchiveWhereUniqueInput
    /**
     * In case the SessionArchive found by the `where` argument doesn't exist, create a new SessionArchive with this data.
     */
    create: XOR<SessionArchiveCreateInput, SessionArchiveUncheckedCreateInput>
    /**
     * In case the SessionArchive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionArchiveUpdateInput, SessionArchiveUncheckedUpdateInput>
  }

  /**
   * SessionArchive delete
   */
  export type SessionArchiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
    /**
     * Filter which SessionArchive to delete.
     */
    where: SessionArchiveWhereUniqueInput
  }

  /**
   * SessionArchive deleteMany
   */
  export type SessionArchiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionArchives to delete
     */
    where?: SessionArchiveWhereInput
    /**
     * Limit how many SessionArchives to delete.
     */
    limit?: number
  }

  /**
   * SessionArchive without action
   */
  export type SessionArchiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionArchive
     */
    select?: SessionArchiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionArchive
     */
    omit?: SessionArchiveOmit<ExtArgs> | null
  }


  /**
   * Model FeedbackResponse
   */

  export type AggregateFeedbackResponse = {
    _count: FeedbackResponseCountAggregateOutputType | null
    _min: FeedbackResponseMinAggregateOutputType | null
    _max: FeedbackResponseMaxAggregateOutputType | null
  }

  export type FeedbackResponseMinAggregateOutputType = {
    id: string | null
    userName: string | null
    teamName: string | null
    comments: string | null
    createdAt: Date | null
  }

  export type FeedbackResponseMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    teamName: string | null
    comments: string | null
    createdAt: Date | null
  }

  export type FeedbackResponseCountAggregateOutputType = {
    id: number
    userName: number
    teamName: number
    comments: number
    createdAt: number
    _all: number
  }


  export type FeedbackResponseMinAggregateInputType = {
    id?: true
    userName?: true
    teamName?: true
    comments?: true
    createdAt?: true
  }

  export type FeedbackResponseMaxAggregateInputType = {
    id?: true
    userName?: true
    teamName?: true
    comments?: true
    createdAt?: true
  }

  export type FeedbackResponseCountAggregateInputType = {
    id?: true
    userName?: true
    teamName?: true
    comments?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackResponse to aggregate.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackResponses
    **/
    _count?: true | FeedbackResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackResponseMaxAggregateInputType
  }

  export type GetFeedbackResponseAggregateType<T extends FeedbackResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackResponse[P]>
      : GetScalarType<T[P], AggregateFeedbackResponse[P]>
  }




  export type FeedbackResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackResponseWhereInput
    orderBy?: FeedbackResponseOrderByWithAggregationInput | FeedbackResponseOrderByWithAggregationInput[]
    by: FeedbackResponseScalarFieldEnum[] | FeedbackResponseScalarFieldEnum
    having?: FeedbackResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackResponseCountAggregateInputType | true
    _min?: FeedbackResponseMinAggregateInputType
    _max?: FeedbackResponseMaxAggregateInputType
  }

  export type FeedbackResponseGroupByOutputType = {
    id: string
    userName: string
    teamName: string | null
    comments: string | null
    createdAt: Date
    _count: FeedbackResponseCountAggregateOutputType | null
    _min: FeedbackResponseMinAggregateOutputType | null
    _max: FeedbackResponseMaxAggregateOutputType | null
  }

  type GetFeedbackResponseGroupByPayload<T extends FeedbackResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackResponseGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    teamName?: boolean
    comments?: boolean
    createdAt?: boolean
    answers?: boolean | FeedbackResponse$answersArgs<ExtArgs>
    _count?: boolean | FeedbackResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackResponse"]>

  export type FeedbackResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    teamName?: boolean
    comments?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedbackResponse"]>

  export type FeedbackResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    teamName?: boolean
    comments?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedbackResponse"]>

  export type FeedbackResponseSelectScalar = {
    id?: boolean
    userName?: boolean
    teamName?: boolean
    comments?: boolean
    createdAt?: boolean
  }

  export type FeedbackResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "teamName" | "comments" | "createdAt", ExtArgs["result"]["feedbackResponse"]>
  export type FeedbackResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | FeedbackResponse$answersArgs<ExtArgs>
    _count?: boolean | FeedbackResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeedbackResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeedbackResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeedbackResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackResponse"
    objects: {
      answers: Prisma.$FeedbackAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      teamName: string | null
      comments: string | null
      createdAt: Date
    }, ExtArgs["result"]["feedbackResponse"]>
    composites: {}
  }

  type FeedbackResponseGetPayload<S extends boolean | null | undefined | FeedbackResponseDefaultArgs> = $Result.GetResult<Prisma.$FeedbackResponsePayload, S>

  type FeedbackResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackResponseCountAggregateInputType | true
    }

  export interface FeedbackResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackResponse'], meta: { name: 'FeedbackResponse' } }
    /**
     * Find zero or one FeedbackResponse that matches the filter.
     * @param {FeedbackResponseFindUniqueArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackResponseFindUniqueArgs>(args: SelectSubset<T, FeedbackResponseFindUniqueArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackResponseFindUniqueOrThrowArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseFindFirstArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackResponseFindFirstArgs>(args?: SelectSubset<T, FeedbackResponseFindFirstArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseFindFirstOrThrowArgs} args - Arguments to find a FeedbackResponse
     * @example
     * // Get one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackResponses
     * const feedbackResponses = await prisma.feedbackResponse.findMany()
     * 
     * // Get first 10 FeedbackResponses
     * const feedbackResponses = await prisma.feedbackResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackResponseWithIdOnly = await prisma.feedbackResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackResponseFindManyArgs>(args?: SelectSubset<T, FeedbackResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackResponse.
     * @param {FeedbackResponseCreateArgs} args - Arguments to create a FeedbackResponse.
     * @example
     * // Create one FeedbackResponse
     * const FeedbackResponse = await prisma.feedbackResponse.create({
     *   data: {
     *     // ... data to create a FeedbackResponse
     *   }
     * })
     * 
     */
    create<T extends FeedbackResponseCreateArgs>(args: SelectSubset<T, FeedbackResponseCreateArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackResponses.
     * @param {FeedbackResponseCreateManyArgs} args - Arguments to create many FeedbackResponses.
     * @example
     * // Create many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackResponseCreateManyArgs>(args?: SelectSubset<T, FeedbackResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedbackResponses and returns the data saved in the database.
     * @param {FeedbackResponseCreateManyAndReturnArgs} args - Arguments to create many FeedbackResponses.
     * @example
     * // Create many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedbackResponses and only return the `id`
     * const feedbackResponseWithIdOnly = await prisma.feedbackResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedbackResponse.
     * @param {FeedbackResponseDeleteArgs} args - Arguments to delete one FeedbackResponse.
     * @example
     * // Delete one FeedbackResponse
     * const FeedbackResponse = await prisma.feedbackResponse.delete({
     *   where: {
     *     // ... filter to delete one FeedbackResponse
     *   }
     * })
     * 
     */
    delete<T extends FeedbackResponseDeleteArgs>(args: SelectSubset<T, FeedbackResponseDeleteArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackResponse.
     * @param {FeedbackResponseUpdateArgs} args - Arguments to update one FeedbackResponse.
     * @example
     * // Update one FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackResponseUpdateArgs>(args: SelectSubset<T, FeedbackResponseUpdateArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackResponses.
     * @param {FeedbackResponseDeleteManyArgs} args - Arguments to filter FeedbackResponses to delete.
     * @example
     * // Delete a few FeedbackResponses
     * const { count } = await prisma.feedbackResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackResponseDeleteManyArgs>(args?: SelectSubset<T, FeedbackResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackResponseUpdateManyArgs>(args: SelectSubset<T, FeedbackResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackResponses and returns the data updated in the database.
     * @param {FeedbackResponseUpdateManyAndReturnArgs} args - Arguments to update many FeedbackResponses.
     * @example
     * // Update many FeedbackResponses
     * const feedbackResponse = await prisma.feedbackResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedbackResponses and only return the `id`
     * const feedbackResponseWithIdOnly = await prisma.feedbackResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedbackResponse.
     * @param {FeedbackResponseUpsertArgs} args - Arguments to update or create a FeedbackResponse.
     * @example
     * // Update or create a FeedbackResponse
     * const feedbackResponse = await prisma.feedbackResponse.upsert({
     *   create: {
     *     // ... data to create a FeedbackResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackResponse we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackResponseUpsertArgs>(args: SelectSubset<T, FeedbackResponseUpsertArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedbackResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseCountArgs} args - Arguments to filter FeedbackResponses to count.
     * @example
     * // Count the number of FeedbackResponses
     * const count = await prisma.feedbackResponse.count({
     *   where: {
     *     // ... the filter for the FeedbackResponses we want to count
     *   }
     * })
    **/
    count<T extends FeedbackResponseCountArgs>(
      args?: Subset<T, FeedbackResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackResponseAggregateArgs>(args: Subset<T, FeedbackResponseAggregateArgs>): Prisma.PrismaPromise<GetFeedbackResponseAggregateType<T>>

    /**
     * Group by FeedbackResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackResponseGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackResponse model
   */
  readonly fields: FeedbackResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answers<T extends FeedbackResponse$answersArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackResponse$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedbackResponse model
   */
  interface FeedbackResponseFieldRefs {
    readonly id: FieldRef<"FeedbackResponse", 'String'>
    readonly userName: FieldRef<"FeedbackResponse", 'String'>
    readonly teamName: FieldRef<"FeedbackResponse", 'String'>
    readonly comments: FieldRef<"FeedbackResponse", 'String'>
    readonly createdAt: FieldRef<"FeedbackResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackResponse findUnique
   */
  export type FeedbackResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse findUniqueOrThrow
   */
  export type FeedbackResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse findFirst
   */
  export type FeedbackResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackResponses.
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackResponses.
     */
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * FeedbackResponse findFirstOrThrow
   */
  export type FeedbackResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponse to fetch.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackResponses.
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackResponses.
     */
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * FeedbackResponse findMany
   */
  export type FeedbackResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackResponses to fetch.
     */
    where?: FeedbackResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackResponses to fetch.
     */
    orderBy?: FeedbackResponseOrderByWithRelationInput | FeedbackResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackResponses.
     */
    cursor?: FeedbackResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackResponses.
     */
    skip?: number
    distinct?: FeedbackResponseScalarFieldEnum | FeedbackResponseScalarFieldEnum[]
  }

  /**
   * FeedbackResponse create
   */
  export type FeedbackResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedbackResponse.
     */
    data: XOR<FeedbackResponseCreateInput, FeedbackResponseUncheckedCreateInput>
  }

  /**
   * FeedbackResponse createMany
   */
  export type FeedbackResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackResponses.
     */
    data: FeedbackResponseCreateManyInput | FeedbackResponseCreateManyInput[]
  }

  /**
   * FeedbackResponse createManyAndReturn
   */
  export type FeedbackResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * The data used to create many FeedbackResponses.
     */
    data: FeedbackResponseCreateManyInput | FeedbackResponseCreateManyInput[]
  }

  /**
   * FeedbackResponse update
   */
  export type FeedbackResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedbackResponse.
     */
    data: XOR<FeedbackResponseUpdateInput, FeedbackResponseUncheckedUpdateInput>
    /**
     * Choose, which FeedbackResponse to update.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse updateMany
   */
  export type FeedbackResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackResponses.
     */
    data: XOR<FeedbackResponseUpdateManyMutationInput, FeedbackResponseUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackResponses to update
     */
    where?: FeedbackResponseWhereInput
    /**
     * Limit how many FeedbackResponses to update.
     */
    limit?: number
  }

  /**
   * FeedbackResponse updateManyAndReturn
   */
  export type FeedbackResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * The data used to update FeedbackResponses.
     */
    data: XOR<FeedbackResponseUpdateManyMutationInput, FeedbackResponseUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackResponses to update
     */
    where?: FeedbackResponseWhereInput
    /**
     * Limit how many FeedbackResponses to update.
     */
    limit?: number
  }

  /**
   * FeedbackResponse upsert
   */
  export type FeedbackResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedbackResponse to update in case it exists.
     */
    where: FeedbackResponseWhereUniqueInput
    /**
     * In case the FeedbackResponse found by the `where` argument doesn't exist, create a new FeedbackResponse with this data.
     */
    create: XOR<FeedbackResponseCreateInput, FeedbackResponseUncheckedCreateInput>
    /**
     * In case the FeedbackResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackResponseUpdateInput, FeedbackResponseUncheckedUpdateInput>
  }

  /**
   * FeedbackResponse delete
   */
  export type FeedbackResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
    /**
     * Filter which FeedbackResponse to delete.
     */
    where: FeedbackResponseWhereUniqueInput
  }

  /**
   * FeedbackResponse deleteMany
   */
  export type FeedbackResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackResponses to delete
     */
    where?: FeedbackResponseWhereInput
    /**
     * Limit how many FeedbackResponses to delete.
     */
    limit?: number
  }

  /**
   * FeedbackResponse.answers
   */
  export type FeedbackResponse$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    where?: FeedbackAnswerWhereInput
    orderBy?: FeedbackAnswerOrderByWithRelationInput | FeedbackAnswerOrderByWithRelationInput[]
    cursor?: FeedbackAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackAnswerScalarFieldEnum | FeedbackAnswerScalarFieldEnum[]
  }

  /**
   * FeedbackResponse without action
   */
  export type FeedbackResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackResponse
     */
    select?: FeedbackResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackResponse
     */
    omit?: FeedbackResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackResponseInclude<ExtArgs> | null
  }


  /**
   * Model FeedbackAnswer
   */

  export type AggregateFeedbackAnswer = {
    _count: FeedbackAnswerCountAggregateOutputType | null
    _avg: FeedbackAnswerAvgAggregateOutputType | null
    _sum: FeedbackAnswerSumAggregateOutputType | null
    _min: FeedbackAnswerMinAggregateOutputType | null
    _max: FeedbackAnswerMaxAggregateOutputType | null
  }

  export type FeedbackAnswerAvgAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackAnswerSumAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackAnswerMinAggregateOutputType = {
    id: string | null
    responseId: string | null
    questionId: string | null
    labelSnapshot: string | null
    rating: number | null
  }

  export type FeedbackAnswerMaxAggregateOutputType = {
    id: string | null
    responseId: string | null
    questionId: string | null
    labelSnapshot: string | null
    rating: number | null
  }

  export type FeedbackAnswerCountAggregateOutputType = {
    id: number
    responseId: number
    questionId: number
    labelSnapshot: number
    rating: number
    _all: number
  }


  export type FeedbackAnswerAvgAggregateInputType = {
    rating?: true
  }

  export type FeedbackAnswerSumAggregateInputType = {
    rating?: true
  }

  export type FeedbackAnswerMinAggregateInputType = {
    id?: true
    responseId?: true
    questionId?: true
    labelSnapshot?: true
    rating?: true
  }

  export type FeedbackAnswerMaxAggregateInputType = {
    id?: true
    responseId?: true
    questionId?: true
    labelSnapshot?: true
    rating?: true
  }

  export type FeedbackAnswerCountAggregateInputType = {
    id?: true
    responseId?: true
    questionId?: true
    labelSnapshot?: true
    rating?: true
    _all?: true
  }

  export type FeedbackAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackAnswer to aggregate.
     */
    where?: FeedbackAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAnswers to fetch.
     */
    orderBy?: FeedbackAnswerOrderByWithRelationInput | FeedbackAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackAnswers
    **/
    _count?: true | FeedbackAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackAnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackAnswerMaxAggregateInputType
  }

  export type GetFeedbackAnswerAggregateType<T extends FeedbackAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackAnswer[P]>
      : GetScalarType<T[P], AggregateFeedbackAnswer[P]>
  }




  export type FeedbackAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackAnswerWhereInput
    orderBy?: FeedbackAnswerOrderByWithAggregationInput | FeedbackAnswerOrderByWithAggregationInput[]
    by: FeedbackAnswerScalarFieldEnum[] | FeedbackAnswerScalarFieldEnum
    having?: FeedbackAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackAnswerCountAggregateInputType | true
    _avg?: FeedbackAnswerAvgAggregateInputType
    _sum?: FeedbackAnswerSumAggregateInputType
    _min?: FeedbackAnswerMinAggregateInputType
    _max?: FeedbackAnswerMaxAggregateInputType
  }

  export type FeedbackAnswerGroupByOutputType = {
    id: string
    responseId: string
    questionId: string
    labelSnapshot: string
    rating: number
    _count: FeedbackAnswerCountAggregateOutputType | null
    _avg: FeedbackAnswerAvgAggregateOutputType | null
    _sum: FeedbackAnswerSumAggregateOutputType | null
    _min: FeedbackAnswerMinAggregateOutputType | null
    _max: FeedbackAnswerMaxAggregateOutputType | null
  }

  type GetFeedbackAnswerGroupByPayload<T extends FeedbackAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackAnswerGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responseId?: boolean
    questionId?: boolean
    labelSnapshot?: boolean
    rating?: boolean
    response?: boolean | FeedbackResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackAnswer"]>

  export type FeedbackAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responseId?: boolean
    questionId?: boolean
    labelSnapshot?: boolean
    rating?: boolean
    response?: boolean | FeedbackResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackAnswer"]>

  export type FeedbackAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responseId?: boolean
    questionId?: boolean
    labelSnapshot?: boolean
    rating?: boolean
    response?: boolean | FeedbackResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedbackAnswer"]>

  export type FeedbackAnswerSelectScalar = {
    id?: boolean
    responseId?: boolean
    questionId?: boolean
    labelSnapshot?: boolean
    rating?: boolean
  }

  export type FeedbackAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "responseId" | "questionId" | "labelSnapshot" | "rating", ExtArgs["result"]["feedbackAnswer"]>
  export type FeedbackAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | FeedbackResponseDefaultArgs<ExtArgs>
  }
  export type FeedbackAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | FeedbackResponseDefaultArgs<ExtArgs>
  }
  export type FeedbackAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    response?: boolean | FeedbackResponseDefaultArgs<ExtArgs>
  }

  export type $FeedbackAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackAnswer"
    objects: {
      response: Prisma.$FeedbackResponsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      responseId: string
      questionId: string
      labelSnapshot: string
      rating: number
    }, ExtArgs["result"]["feedbackAnswer"]>
    composites: {}
  }

  type FeedbackAnswerGetPayload<S extends boolean | null | undefined | FeedbackAnswerDefaultArgs> = $Result.GetResult<Prisma.$FeedbackAnswerPayload, S>

  type FeedbackAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackAnswerCountAggregateInputType | true
    }

  export interface FeedbackAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackAnswer'], meta: { name: 'FeedbackAnswer' } }
    /**
     * Find zero or one FeedbackAnswer that matches the filter.
     * @param {FeedbackAnswerFindUniqueArgs} args - Arguments to find a FeedbackAnswer
     * @example
     * // Get one FeedbackAnswer
     * const feedbackAnswer = await prisma.feedbackAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackAnswerFindUniqueArgs>(args: SelectSubset<T, FeedbackAnswerFindUniqueArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackAnswerFindUniqueOrThrowArgs} args - Arguments to find a FeedbackAnswer
     * @example
     * // Get one FeedbackAnswer
     * const feedbackAnswer = await prisma.feedbackAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAnswerFindFirstArgs} args - Arguments to find a FeedbackAnswer
     * @example
     * // Get one FeedbackAnswer
     * const feedbackAnswer = await prisma.feedbackAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackAnswerFindFirstArgs>(args?: SelectSubset<T, FeedbackAnswerFindFirstArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAnswerFindFirstOrThrowArgs} args - Arguments to find a FeedbackAnswer
     * @example
     * // Get one FeedbackAnswer
     * const feedbackAnswer = await prisma.feedbackAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackAnswers
     * const feedbackAnswers = await prisma.feedbackAnswer.findMany()
     * 
     * // Get first 10 FeedbackAnswers
     * const feedbackAnswers = await prisma.feedbackAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackAnswerWithIdOnly = await prisma.feedbackAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackAnswerFindManyArgs>(args?: SelectSubset<T, FeedbackAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackAnswer.
     * @param {FeedbackAnswerCreateArgs} args - Arguments to create a FeedbackAnswer.
     * @example
     * // Create one FeedbackAnswer
     * const FeedbackAnswer = await prisma.feedbackAnswer.create({
     *   data: {
     *     // ... data to create a FeedbackAnswer
     *   }
     * })
     * 
     */
    create<T extends FeedbackAnswerCreateArgs>(args: SelectSubset<T, FeedbackAnswerCreateArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackAnswers.
     * @param {FeedbackAnswerCreateManyArgs} args - Arguments to create many FeedbackAnswers.
     * @example
     * // Create many FeedbackAnswers
     * const feedbackAnswer = await prisma.feedbackAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackAnswerCreateManyArgs>(args?: SelectSubset<T, FeedbackAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedbackAnswers and returns the data saved in the database.
     * @param {FeedbackAnswerCreateManyAndReturnArgs} args - Arguments to create many FeedbackAnswers.
     * @example
     * // Create many FeedbackAnswers
     * const feedbackAnswer = await prisma.feedbackAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedbackAnswers and only return the `id`
     * const feedbackAnswerWithIdOnly = await prisma.feedbackAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedbackAnswer.
     * @param {FeedbackAnswerDeleteArgs} args - Arguments to delete one FeedbackAnswer.
     * @example
     * // Delete one FeedbackAnswer
     * const FeedbackAnswer = await prisma.feedbackAnswer.delete({
     *   where: {
     *     // ... filter to delete one FeedbackAnswer
     *   }
     * })
     * 
     */
    delete<T extends FeedbackAnswerDeleteArgs>(args: SelectSubset<T, FeedbackAnswerDeleteArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackAnswer.
     * @param {FeedbackAnswerUpdateArgs} args - Arguments to update one FeedbackAnswer.
     * @example
     * // Update one FeedbackAnswer
     * const feedbackAnswer = await prisma.feedbackAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackAnswerUpdateArgs>(args: SelectSubset<T, FeedbackAnswerUpdateArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackAnswers.
     * @param {FeedbackAnswerDeleteManyArgs} args - Arguments to filter FeedbackAnswers to delete.
     * @example
     * // Delete a few FeedbackAnswers
     * const { count } = await prisma.feedbackAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackAnswerDeleteManyArgs>(args?: SelectSubset<T, FeedbackAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackAnswers
     * const feedbackAnswer = await prisma.feedbackAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackAnswerUpdateManyArgs>(args: SelectSubset<T, FeedbackAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackAnswers and returns the data updated in the database.
     * @param {FeedbackAnswerUpdateManyAndReturnArgs} args - Arguments to update many FeedbackAnswers.
     * @example
     * // Update many FeedbackAnswers
     * const feedbackAnswer = await prisma.feedbackAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedbackAnswers and only return the `id`
     * const feedbackAnswerWithIdOnly = await prisma.feedbackAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedbackAnswer.
     * @param {FeedbackAnswerUpsertArgs} args - Arguments to update or create a FeedbackAnswer.
     * @example
     * // Update or create a FeedbackAnswer
     * const feedbackAnswer = await prisma.feedbackAnswer.upsert({
     *   create: {
     *     // ... data to create a FeedbackAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackAnswer we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackAnswerUpsertArgs>(args: SelectSubset<T, FeedbackAnswerUpsertArgs<ExtArgs>>): Prisma__FeedbackAnswerClient<$Result.GetResult<Prisma.$FeedbackAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedbackAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAnswerCountArgs} args - Arguments to filter FeedbackAnswers to count.
     * @example
     * // Count the number of FeedbackAnswers
     * const count = await prisma.feedbackAnswer.count({
     *   where: {
     *     // ... the filter for the FeedbackAnswers we want to count
     *   }
     * })
    **/
    count<T extends FeedbackAnswerCountArgs>(
      args?: Subset<T, FeedbackAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAnswerAggregateArgs>(args: Subset<T, FeedbackAnswerAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAnswerAggregateType<T>>

    /**
     * Group by FeedbackAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackAnswerGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackAnswer model
   */
  readonly fields: FeedbackAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    response<T extends FeedbackResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeedbackResponseDefaultArgs<ExtArgs>>): Prisma__FeedbackResponseClient<$Result.GetResult<Prisma.$FeedbackResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedbackAnswer model
   */
  interface FeedbackAnswerFieldRefs {
    readonly id: FieldRef<"FeedbackAnswer", 'String'>
    readonly responseId: FieldRef<"FeedbackAnswer", 'String'>
    readonly questionId: FieldRef<"FeedbackAnswer", 'String'>
    readonly labelSnapshot: FieldRef<"FeedbackAnswer", 'String'>
    readonly rating: FieldRef<"FeedbackAnswer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackAnswer findUnique
   */
  export type FeedbackAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackAnswer to fetch.
     */
    where: FeedbackAnswerWhereUniqueInput
  }

  /**
   * FeedbackAnswer findUniqueOrThrow
   */
  export type FeedbackAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackAnswer to fetch.
     */
    where: FeedbackAnswerWhereUniqueInput
  }

  /**
   * FeedbackAnswer findFirst
   */
  export type FeedbackAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackAnswer to fetch.
     */
    where?: FeedbackAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAnswers to fetch.
     */
    orderBy?: FeedbackAnswerOrderByWithRelationInput | FeedbackAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackAnswers.
     */
    cursor?: FeedbackAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackAnswers.
     */
    distinct?: FeedbackAnswerScalarFieldEnum | FeedbackAnswerScalarFieldEnum[]
  }

  /**
   * FeedbackAnswer findFirstOrThrow
   */
  export type FeedbackAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackAnswer to fetch.
     */
    where?: FeedbackAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAnswers to fetch.
     */
    orderBy?: FeedbackAnswerOrderByWithRelationInput | FeedbackAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackAnswers.
     */
    cursor?: FeedbackAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackAnswers.
     */
    distinct?: FeedbackAnswerScalarFieldEnum | FeedbackAnswerScalarFieldEnum[]
  }

  /**
   * FeedbackAnswer findMany
   */
  export type FeedbackAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * Filter, which FeedbackAnswers to fetch.
     */
    where?: FeedbackAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackAnswers to fetch.
     */
    orderBy?: FeedbackAnswerOrderByWithRelationInput | FeedbackAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackAnswers.
     */
    cursor?: FeedbackAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackAnswers.
     */
    skip?: number
    distinct?: FeedbackAnswerScalarFieldEnum | FeedbackAnswerScalarFieldEnum[]
  }

  /**
   * FeedbackAnswer create
   */
  export type FeedbackAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedbackAnswer.
     */
    data: XOR<FeedbackAnswerCreateInput, FeedbackAnswerUncheckedCreateInput>
  }

  /**
   * FeedbackAnswer createMany
   */
  export type FeedbackAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackAnswers.
     */
    data: FeedbackAnswerCreateManyInput | FeedbackAnswerCreateManyInput[]
  }

  /**
   * FeedbackAnswer createManyAndReturn
   */
  export type FeedbackAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many FeedbackAnswers.
     */
    data: FeedbackAnswerCreateManyInput | FeedbackAnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedbackAnswer update
   */
  export type FeedbackAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedbackAnswer.
     */
    data: XOR<FeedbackAnswerUpdateInput, FeedbackAnswerUncheckedUpdateInput>
    /**
     * Choose, which FeedbackAnswer to update.
     */
    where: FeedbackAnswerWhereUniqueInput
  }

  /**
   * FeedbackAnswer updateMany
   */
  export type FeedbackAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackAnswers.
     */
    data: XOR<FeedbackAnswerUpdateManyMutationInput, FeedbackAnswerUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackAnswers to update
     */
    where?: FeedbackAnswerWhereInput
    /**
     * Limit how many FeedbackAnswers to update.
     */
    limit?: number
  }

  /**
   * FeedbackAnswer updateManyAndReturn
   */
  export type FeedbackAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * The data used to update FeedbackAnswers.
     */
    data: XOR<FeedbackAnswerUpdateManyMutationInput, FeedbackAnswerUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackAnswers to update
     */
    where?: FeedbackAnswerWhereInput
    /**
     * Limit how many FeedbackAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FeedbackAnswer upsert
   */
  export type FeedbackAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedbackAnswer to update in case it exists.
     */
    where: FeedbackAnswerWhereUniqueInput
    /**
     * In case the FeedbackAnswer found by the `where` argument doesn't exist, create a new FeedbackAnswer with this data.
     */
    create: XOR<FeedbackAnswerCreateInput, FeedbackAnswerUncheckedCreateInput>
    /**
     * In case the FeedbackAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackAnswerUpdateInput, FeedbackAnswerUncheckedUpdateInput>
  }

  /**
   * FeedbackAnswer delete
   */
  export type FeedbackAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
    /**
     * Filter which FeedbackAnswer to delete.
     */
    where: FeedbackAnswerWhereUniqueInput
  }

  /**
   * FeedbackAnswer deleteMany
   */
  export type FeedbackAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackAnswers to delete
     */
    where?: FeedbackAnswerWhereInput
    /**
     * Limit how many FeedbackAnswers to delete.
     */
    limit?: number
  }

  /**
   * FeedbackAnswer without action
   */
  export type FeedbackAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackAnswer
     */
    select?: FeedbackAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackAnswer
     */
    omit?: FeedbackAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackAnswerInclude<ExtArgs> | null
  }


  /**
   * Model FeedbackQuestion
   */

  export type AggregateFeedbackQuestion = {
    _count: FeedbackQuestionCountAggregateOutputType | null
    _avg: FeedbackQuestionAvgAggregateOutputType | null
    _sum: FeedbackQuestionSumAggregateOutputType | null
    _min: FeedbackQuestionMinAggregateOutputType | null
    _max: FeedbackQuestionMaxAggregateOutputType | null
  }

  export type FeedbackQuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type FeedbackQuestionSumAggregateOutputType = {
    order: number | null
  }

  export type FeedbackQuestionMinAggregateOutputType = {
    id: string | null
    label: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
  }

  export type FeedbackQuestionMaxAggregateOutputType = {
    id: string | null
    label: string | null
    order: number | null
    active: boolean | null
    createdAt: Date | null
  }

  export type FeedbackQuestionCountAggregateOutputType = {
    id: number
    label: number
    order: number
    active: number
    createdAt: number
    _all: number
  }


  export type FeedbackQuestionAvgAggregateInputType = {
    order?: true
  }

  export type FeedbackQuestionSumAggregateInputType = {
    order?: true
  }

  export type FeedbackQuestionMinAggregateInputType = {
    id?: true
    label?: true
    order?: true
    active?: true
    createdAt?: true
  }

  export type FeedbackQuestionMaxAggregateInputType = {
    id?: true
    label?: true
    order?: true
    active?: true
    createdAt?: true
  }

  export type FeedbackQuestionCountAggregateInputType = {
    id?: true
    label?: true
    order?: true
    active?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackQuestion to aggregate.
     */
    where?: FeedbackQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackQuestions to fetch.
     */
    orderBy?: FeedbackQuestionOrderByWithRelationInput | FeedbackQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackQuestions
    **/
    _count?: true | FeedbackQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackQuestionMaxAggregateInputType
  }

  export type GetFeedbackQuestionAggregateType<T extends FeedbackQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackQuestion[P]>
      : GetScalarType<T[P], AggregateFeedbackQuestion[P]>
  }




  export type FeedbackQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackQuestionWhereInput
    orderBy?: FeedbackQuestionOrderByWithAggregationInput | FeedbackQuestionOrderByWithAggregationInput[]
    by: FeedbackQuestionScalarFieldEnum[] | FeedbackQuestionScalarFieldEnum
    having?: FeedbackQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackQuestionCountAggregateInputType | true
    _avg?: FeedbackQuestionAvgAggregateInputType
    _sum?: FeedbackQuestionSumAggregateInputType
    _min?: FeedbackQuestionMinAggregateInputType
    _max?: FeedbackQuestionMaxAggregateInputType
  }

  export type FeedbackQuestionGroupByOutputType = {
    id: string
    label: string
    order: number
    active: boolean
    createdAt: Date
    _count: FeedbackQuestionCountAggregateOutputType | null
    _avg: FeedbackQuestionAvgAggregateOutputType | null
    _sum: FeedbackQuestionSumAggregateOutputType | null
    _min: FeedbackQuestionMinAggregateOutputType | null
    _max: FeedbackQuestionMaxAggregateOutputType | null
  }

  type GetFeedbackQuestionGroupByPayload<T extends FeedbackQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackQuestionGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedbackQuestion"]>

  export type FeedbackQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedbackQuestion"]>

  export type FeedbackQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["feedbackQuestion"]>

  export type FeedbackQuestionSelectScalar = {
    id?: boolean
    label?: boolean
    order?: boolean
    active?: boolean
    createdAt?: boolean
  }

  export type FeedbackQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "order" | "active" | "createdAt", ExtArgs["result"]["feedbackQuestion"]>

  export type $FeedbackQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackQuestion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      order: number
      active: boolean
      createdAt: Date
    }, ExtArgs["result"]["feedbackQuestion"]>
    composites: {}
  }

  type FeedbackQuestionGetPayload<S extends boolean | null | undefined | FeedbackQuestionDefaultArgs> = $Result.GetResult<Prisma.$FeedbackQuestionPayload, S>

  type FeedbackQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackQuestionCountAggregateInputType | true
    }

  export interface FeedbackQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackQuestion'], meta: { name: 'FeedbackQuestion' } }
    /**
     * Find zero or one FeedbackQuestion that matches the filter.
     * @param {FeedbackQuestionFindUniqueArgs} args - Arguments to find a FeedbackQuestion
     * @example
     * // Get one FeedbackQuestion
     * const feedbackQuestion = await prisma.feedbackQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackQuestionFindUniqueArgs>(args: SelectSubset<T, FeedbackQuestionFindUniqueArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackQuestionFindUniqueOrThrowArgs} args - Arguments to find a FeedbackQuestion
     * @example
     * // Get one FeedbackQuestion
     * const feedbackQuestion = await prisma.feedbackQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackQuestionFindFirstArgs} args - Arguments to find a FeedbackQuestion
     * @example
     * // Get one FeedbackQuestion
     * const feedbackQuestion = await prisma.feedbackQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackQuestionFindFirstArgs>(args?: SelectSubset<T, FeedbackQuestionFindFirstArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackQuestionFindFirstOrThrowArgs} args - Arguments to find a FeedbackQuestion
     * @example
     * // Get one FeedbackQuestion
     * const feedbackQuestion = await prisma.feedbackQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackQuestions
     * const feedbackQuestions = await prisma.feedbackQuestion.findMany()
     * 
     * // Get first 10 FeedbackQuestions
     * const feedbackQuestions = await prisma.feedbackQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackQuestionWithIdOnly = await prisma.feedbackQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackQuestionFindManyArgs>(args?: SelectSubset<T, FeedbackQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackQuestion.
     * @param {FeedbackQuestionCreateArgs} args - Arguments to create a FeedbackQuestion.
     * @example
     * // Create one FeedbackQuestion
     * const FeedbackQuestion = await prisma.feedbackQuestion.create({
     *   data: {
     *     // ... data to create a FeedbackQuestion
     *   }
     * })
     * 
     */
    create<T extends FeedbackQuestionCreateArgs>(args: SelectSubset<T, FeedbackQuestionCreateArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackQuestions.
     * @param {FeedbackQuestionCreateManyArgs} args - Arguments to create many FeedbackQuestions.
     * @example
     * // Create many FeedbackQuestions
     * const feedbackQuestion = await prisma.feedbackQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackQuestionCreateManyArgs>(args?: SelectSubset<T, FeedbackQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedbackQuestions and returns the data saved in the database.
     * @param {FeedbackQuestionCreateManyAndReturnArgs} args - Arguments to create many FeedbackQuestions.
     * @example
     * // Create many FeedbackQuestions
     * const feedbackQuestion = await prisma.feedbackQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedbackQuestions and only return the `id`
     * const feedbackQuestionWithIdOnly = await prisma.feedbackQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedbackQuestion.
     * @param {FeedbackQuestionDeleteArgs} args - Arguments to delete one FeedbackQuestion.
     * @example
     * // Delete one FeedbackQuestion
     * const FeedbackQuestion = await prisma.feedbackQuestion.delete({
     *   where: {
     *     // ... filter to delete one FeedbackQuestion
     *   }
     * })
     * 
     */
    delete<T extends FeedbackQuestionDeleteArgs>(args: SelectSubset<T, FeedbackQuestionDeleteArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackQuestion.
     * @param {FeedbackQuestionUpdateArgs} args - Arguments to update one FeedbackQuestion.
     * @example
     * // Update one FeedbackQuestion
     * const feedbackQuestion = await prisma.feedbackQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackQuestionUpdateArgs>(args: SelectSubset<T, FeedbackQuestionUpdateArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackQuestions.
     * @param {FeedbackQuestionDeleteManyArgs} args - Arguments to filter FeedbackQuestions to delete.
     * @example
     * // Delete a few FeedbackQuestions
     * const { count } = await prisma.feedbackQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackQuestionDeleteManyArgs>(args?: SelectSubset<T, FeedbackQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackQuestions
     * const feedbackQuestion = await prisma.feedbackQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackQuestionUpdateManyArgs>(args: SelectSubset<T, FeedbackQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackQuestions and returns the data updated in the database.
     * @param {FeedbackQuestionUpdateManyAndReturnArgs} args - Arguments to update many FeedbackQuestions.
     * @example
     * // Update many FeedbackQuestions
     * const feedbackQuestion = await prisma.feedbackQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedbackQuestions and only return the `id`
     * const feedbackQuestionWithIdOnly = await prisma.feedbackQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedbackQuestion.
     * @param {FeedbackQuestionUpsertArgs} args - Arguments to update or create a FeedbackQuestion.
     * @example
     * // Update or create a FeedbackQuestion
     * const feedbackQuestion = await prisma.feedbackQuestion.upsert({
     *   create: {
     *     // ... data to create a FeedbackQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackQuestion we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackQuestionUpsertArgs>(args: SelectSubset<T, FeedbackQuestionUpsertArgs<ExtArgs>>): Prisma__FeedbackQuestionClient<$Result.GetResult<Prisma.$FeedbackQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedbackQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackQuestionCountArgs} args - Arguments to filter FeedbackQuestions to count.
     * @example
     * // Count the number of FeedbackQuestions
     * const count = await prisma.feedbackQuestion.count({
     *   where: {
     *     // ... the filter for the FeedbackQuestions we want to count
     *   }
     * })
    **/
    count<T extends FeedbackQuestionCountArgs>(
      args?: Subset<T, FeedbackQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackQuestionAggregateArgs>(args: Subset<T, FeedbackQuestionAggregateArgs>): Prisma.PrismaPromise<GetFeedbackQuestionAggregateType<T>>

    /**
     * Group by FeedbackQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackQuestionGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackQuestion model
   */
  readonly fields: FeedbackQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedbackQuestion model
   */
  interface FeedbackQuestionFieldRefs {
    readonly id: FieldRef<"FeedbackQuestion", 'String'>
    readonly label: FieldRef<"FeedbackQuestion", 'String'>
    readonly order: FieldRef<"FeedbackQuestion", 'Int'>
    readonly active: FieldRef<"FeedbackQuestion", 'Boolean'>
    readonly createdAt: FieldRef<"FeedbackQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackQuestion findUnique
   */
  export type FeedbackQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackQuestion to fetch.
     */
    where: FeedbackQuestionWhereUniqueInput
  }

  /**
   * FeedbackQuestion findUniqueOrThrow
   */
  export type FeedbackQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackQuestion to fetch.
     */
    where: FeedbackQuestionWhereUniqueInput
  }

  /**
   * FeedbackQuestion findFirst
   */
  export type FeedbackQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackQuestion to fetch.
     */
    where?: FeedbackQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackQuestions to fetch.
     */
    orderBy?: FeedbackQuestionOrderByWithRelationInput | FeedbackQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackQuestions.
     */
    cursor?: FeedbackQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackQuestions.
     */
    distinct?: FeedbackQuestionScalarFieldEnum | FeedbackQuestionScalarFieldEnum[]
  }

  /**
   * FeedbackQuestion findFirstOrThrow
   */
  export type FeedbackQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackQuestion to fetch.
     */
    where?: FeedbackQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackQuestions to fetch.
     */
    orderBy?: FeedbackQuestionOrderByWithRelationInput | FeedbackQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackQuestions.
     */
    cursor?: FeedbackQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackQuestions.
     */
    distinct?: FeedbackQuestionScalarFieldEnum | FeedbackQuestionScalarFieldEnum[]
  }

  /**
   * FeedbackQuestion findMany
   */
  export type FeedbackQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackQuestions to fetch.
     */
    where?: FeedbackQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackQuestions to fetch.
     */
    orderBy?: FeedbackQuestionOrderByWithRelationInput | FeedbackQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackQuestions.
     */
    cursor?: FeedbackQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackQuestions.
     */
    skip?: number
    distinct?: FeedbackQuestionScalarFieldEnum | FeedbackQuestionScalarFieldEnum[]
  }

  /**
   * FeedbackQuestion create
   */
  export type FeedbackQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * The data needed to create a FeedbackQuestion.
     */
    data: XOR<FeedbackQuestionCreateInput, FeedbackQuestionUncheckedCreateInput>
  }

  /**
   * FeedbackQuestion createMany
   */
  export type FeedbackQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackQuestions.
     */
    data: FeedbackQuestionCreateManyInput | FeedbackQuestionCreateManyInput[]
  }

  /**
   * FeedbackQuestion createManyAndReturn
   */
  export type FeedbackQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many FeedbackQuestions.
     */
    data: FeedbackQuestionCreateManyInput | FeedbackQuestionCreateManyInput[]
  }

  /**
   * FeedbackQuestion update
   */
  export type FeedbackQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * The data needed to update a FeedbackQuestion.
     */
    data: XOR<FeedbackQuestionUpdateInput, FeedbackQuestionUncheckedUpdateInput>
    /**
     * Choose, which FeedbackQuestion to update.
     */
    where: FeedbackQuestionWhereUniqueInput
  }

  /**
   * FeedbackQuestion updateMany
   */
  export type FeedbackQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackQuestions.
     */
    data: XOR<FeedbackQuestionUpdateManyMutationInput, FeedbackQuestionUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackQuestions to update
     */
    where?: FeedbackQuestionWhereInput
    /**
     * Limit how many FeedbackQuestions to update.
     */
    limit?: number
  }

  /**
   * FeedbackQuestion updateManyAndReturn
   */
  export type FeedbackQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * The data used to update FeedbackQuestions.
     */
    data: XOR<FeedbackQuestionUpdateManyMutationInput, FeedbackQuestionUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackQuestions to update
     */
    where?: FeedbackQuestionWhereInput
    /**
     * Limit how many FeedbackQuestions to update.
     */
    limit?: number
  }

  /**
   * FeedbackQuestion upsert
   */
  export type FeedbackQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * The filter to search for the FeedbackQuestion to update in case it exists.
     */
    where: FeedbackQuestionWhereUniqueInput
    /**
     * In case the FeedbackQuestion found by the `where` argument doesn't exist, create a new FeedbackQuestion with this data.
     */
    create: XOR<FeedbackQuestionCreateInput, FeedbackQuestionUncheckedCreateInput>
    /**
     * In case the FeedbackQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackQuestionUpdateInput, FeedbackQuestionUncheckedUpdateInput>
  }

  /**
   * FeedbackQuestion delete
   */
  export type FeedbackQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
    /**
     * Filter which FeedbackQuestion to delete.
     */
    where: FeedbackQuestionWhereUniqueInput
  }

  /**
   * FeedbackQuestion deleteMany
   */
  export type FeedbackQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackQuestions to delete
     */
    where?: FeedbackQuestionWhereInput
    /**
     * Limit how many FeedbackQuestions to delete.
     */
    limit?: number
  }

  /**
   * FeedbackQuestion without action
   */
  export type FeedbackQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackQuestion
     */
    select?: FeedbackQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackQuestion
     */
    omit?: FeedbackQuestionOmit<ExtArgs> | null
  }


  /**
   * Model FeedbackToggle
   */

  export type AggregateFeedbackToggle = {
    _count: FeedbackToggleCountAggregateOutputType | null
    _avg: FeedbackToggleAvgAggregateOutputType | null
    _sum: FeedbackToggleSumAggregateOutputType | null
    _min: FeedbackToggleMinAggregateOutputType | null
    _max: FeedbackToggleMaxAggregateOutputType | null
  }

  export type FeedbackToggleAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbackToggleSumAggregateOutputType = {
    id: number | null
  }

  export type FeedbackToggleMinAggregateOutputType = {
    id: number | null
    enabled: boolean | null
    currentTeam: string | null
  }

  export type FeedbackToggleMaxAggregateOutputType = {
    id: number | null
    enabled: boolean | null
    currentTeam: string | null
  }

  export type FeedbackToggleCountAggregateOutputType = {
    id: number
    enabled: number
    currentTeam: number
    _all: number
  }


  export type FeedbackToggleAvgAggregateInputType = {
    id?: true
  }

  export type FeedbackToggleSumAggregateInputType = {
    id?: true
  }

  export type FeedbackToggleMinAggregateInputType = {
    id?: true
    enabled?: true
    currentTeam?: true
  }

  export type FeedbackToggleMaxAggregateInputType = {
    id?: true
    enabled?: true
    currentTeam?: true
  }

  export type FeedbackToggleCountAggregateInputType = {
    id?: true
    enabled?: true
    currentTeam?: true
    _all?: true
  }

  export type FeedbackToggleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackToggle to aggregate.
     */
    where?: FeedbackToggleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackToggles to fetch.
     */
    orderBy?: FeedbackToggleOrderByWithRelationInput | FeedbackToggleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackToggleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackToggles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackToggles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedbackToggles
    **/
    _count?: true | FeedbackToggleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackToggleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackToggleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackToggleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackToggleMaxAggregateInputType
  }

  export type GetFeedbackToggleAggregateType<T extends FeedbackToggleAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedbackToggle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedbackToggle[P]>
      : GetScalarType<T[P], AggregateFeedbackToggle[P]>
  }




  export type FeedbackToggleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackToggleWhereInput
    orderBy?: FeedbackToggleOrderByWithAggregationInput | FeedbackToggleOrderByWithAggregationInput[]
    by: FeedbackToggleScalarFieldEnum[] | FeedbackToggleScalarFieldEnum
    having?: FeedbackToggleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackToggleCountAggregateInputType | true
    _avg?: FeedbackToggleAvgAggregateInputType
    _sum?: FeedbackToggleSumAggregateInputType
    _min?: FeedbackToggleMinAggregateInputType
    _max?: FeedbackToggleMaxAggregateInputType
  }

  export type FeedbackToggleGroupByOutputType = {
    id: number
    enabled: boolean
    currentTeam: string | null
    _count: FeedbackToggleCountAggregateOutputType | null
    _avg: FeedbackToggleAvgAggregateOutputType | null
    _sum: FeedbackToggleSumAggregateOutputType | null
    _min: FeedbackToggleMinAggregateOutputType | null
    _max: FeedbackToggleMaxAggregateOutputType | null
  }

  type GetFeedbackToggleGroupByPayload<T extends FeedbackToggleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackToggleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackToggleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackToggleGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackToggleGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackToggleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enabled?: boolean
    currentTeam?: boolean
  }, ExtArgs["result"]["feedbackToggle"]>

  export type FeedbackToggleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enabled?: boolean
    currentTeam?: boolean
  }, ExtArgs["result"]["feedbackToggle"]>

  export type FeedbackToggleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enabled?: boolean
    currentTeam?: boolean
  }, ExtArgs["result"]["feedbackToggle"]>

  export type FeedbackToggleSelectScalar = {
    id?: boolean
    enabled?: boolean
    currentTeam?: boolean
  }

  export type FeedbackToggleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enabled" | "currentTeam", ExtArgs["result"]["feedbackToggle"]>

  export type $FeedbackTogglePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeedbackToggle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enabled: boolean
      currentTeam: string | null
    }, ExtArgs["result"]["feedbackToggle"]>
    composites: {}
  }

  type FeedbackToggleGetPayload<S extends boolean | null | undefined | FeedbackToggleDefaultArgs> = $Result.GetResult<Prisma.$FeedbackTogglePayload, S>

  type FeedbackToggleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackToggleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackToggleCountAggregateInputType | true
    }

  export interface FeedbackToggleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedbackToggle'], meta: { name: 'FeedbackToggle' } }
    /**
     * Find zero or one FeedbackToggle that matches the filter.
     * @param {FeedbackToggleFindUniqueArgs} args - Arguments to find a FeedbackToggle
     * @example
     * // Get one FeedbackToggle
     * const feedbackToggle = await prisma.feedbackToggle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackToggleFindUniqueArgs>(args: SelectSubset<T, FeedbackToggleFindUniqueArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeedbackToggle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackToggleFindUniqueOrThrowArgs} args - Arguments to find a FeedbackToggle
     * @example
     * // Get one FeedbackToggle
     * const feedbackToggle = await prisma.feedbackToggle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackToggleFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackToggleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackToggle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackToggleFindFirstArgs} args - Arguments to find a FeedbackToggle
     * @example
     * // Get one FeedbackToggle
     * const feedbackToggle = await prisma.feedbackToggle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackToggleFindFirstArgs>(args?: SelectSubset<T, FeedbackToggleFindFirstArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeedbackToggle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackToggleFindFirstOrThrowArgs} args - Arguments to find a FeedbackToggle
     * @example
     * // Get one FeedbackToggle
     * const feedbackToggle = await prisma.feedbackToggle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackToggleFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackToggleFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeedbackToggles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackToggleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedbackToggles
     * const feedbackToggles = await prisma.feedbackToggle.findMany()
     * 
     * // Get first 10 FeedbackToggles
     * const feedbackToggles = await prisma.feedbackToggle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackToggleWithIdOnly = await prisma.feedbackToggle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackToggleFindManyArgs>(args?: SelectSubset<T, FeedbackToggleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeedbackToggle.
     * @param {FeedbackToggleCreateArgs} args - Arguments to create a FeedbackToggle.
     * @example
     * // Create one FeedbackToggle
     * const FeedbackToggle = await prisma.feedbackToggle.create({
     *   data: {
     *     // ... data to create a FeedbackToggle
     *   }
     * })
     * 
     */
    create<T extends FeedbackToggleCreateArgs>(args: SelectSubset<T, FeedbackToggleCreateArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeedbackToggles.
     * @param {FeedbackToggleCreateManyArgs} args - Arguments to create many FeedbackToggles.
     * @example
     * // Create many FeedbackToggles
     * const feedbackToggle = await prisma.feedbackToggle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackToggleCreateManyArgs>(args?: SelectSubset<T, FeedbackToggleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeedbackToggles and returns the data saved in the database.
     * @param {FeedbackToggleCreateManyAndReturnArgs} args - Arguments to create many FeedbackToggles.
     * @example
     * // Create many FeedbackToggles
     * const feedbackToggle = await prisma.feedbackToggle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeedbackToggles and only return the `id`
     * const feedbackToggleWithIdOnly = await prisma.feedbackToggle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackToggleCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackToggleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeedbackToggle.
     * @param {FeedbackToggleDeleteArgs} args - Arguments to delete one FeedbackToggle.
     * @example
     * // Delete one FeedbackToggle
     * const FeedbackToggle = await prisma.feedbackToggle.delete({
     *   where: {
     *     // ... filter to delete one FeedbackToggle
     *   }
     * })
     * 
     */
    delete<T extends FeedbackToggleDeleteArgs>(args: SelectSubset<T, FeedbackToggleDeleteArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeedbackToggle.
     * @param {FeedbackToggleUpdateArgs} args - Arguments to update one FeedbackToggle.
     * @example
     * // Update one FeedbackToggle
     * const feedbackToggle = await prisma.feedbackToggle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackToggleUpdateArgs>(args: SelectSubset<T, FeedbackToggleUpdateArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeedbackToggles.
     * @param {FeedbackToggleDeleteManyArgs} args - Arguments to filter FeedbackToggles to delete.
     * @example
     * // Delete a few FeedbackToggles
     * const { count } = await prisma.feedbackToggle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackToggleDeleteManyArgs>(args?: SelectSubset<T, FeedbackToggleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackToggles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackToggleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedbackToggles
     * const feedbackToggle = await prisma.feedbackToggle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackToggleUpdateManyArgs>(args: SelectSubset<T, FeedbackToggleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedbackToggles and returns the data updated in the database.
     * @param {FeedbackToggleUpdateManyAndReturnArgs} args - Arguments to update many FeedbackToggles.
     * @example
     * // Update many FeedbackToggles
     * const feedbackToggle = await prisma.feedbackToggle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeedbackToggles and only return the `id`
     * const feedbackToggleWithIdOnly = await prisma.feedbackToggle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackToggleUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackToggleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeedbackToggle.
     * @param {FeedbackToggleUpsertArgs} args - Arguments to update or create a FeedbackToggle.
     * @example
     * // Update or create a FeedbackToggle
     * const feedbackToggle = await prisma.feedbackToggle.upsert({
     *   create: {
     *     // ... data to create a FeedbackToggle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedbackToggle we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackToggleUpsertArgs>(args: SelectSubset<T, FeedbackToggleUpsertArgs<ExtArgs>>): Prisma__FeedbackToggleClient<$Result.GetResult<Prisma.$FeedbackTogglePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeedbackToggles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackToggleCountArgs} args - Arguments to filter FeedbackToggles to count.
     * @example
     * // Count the number of FeedbackToggles
     * const count = await prisma.feedbackToggle.count({
     *   where: {
     *     // ... the filter for the FeedbackToggles we want to count
     *   }
     * })
    **/
    count<T extends FeedbackToggleCountArgs>(
      args?: Subset<T, FeedbackToggleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackToggleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedbackToggle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackToggleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackToggleAggregateArgs>(args: Subset<T, FeedbackToggleAggregateArgs>): Prisma.PrismaPromise<GetFeedbackToggleAggregateType<T>>

    /**
     * Group by FeedbackToggle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackToggleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackToggleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackToggleGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackToggleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackToggleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackToggleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedbackToggle model
   */
  readonly fields: FeedbackToggleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedbackToggle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackToggleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeedbackToggle model
   */
  interface FeedbackToggleFieldRefs {
    readonly id: FieldRef<"FeedbackToggle", 'Int'>
    readonly enabled: FieldRef<"FeedbackToggle", 'Boolean'>
    readonly currentTeam: FieldRef<"FeedbackToggle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeedbackToggle findUnique
   */
  export type FeedbackToggleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackToggle to fetch.
     */
    where: FeedbackToggleWhereUniqueInput
  }

  /**
   * FeedbackToggle findUniqueOrThrow
   */
  export type FeedbackToggleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackToggle to fetch.
     */
    where: FeedbackToggleWhereUniqueInput
  }

  /**
   * FeedbackToggle findFirst
   */
  export type FeedbackToggleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackToggle to fetch.
     */
    where?: FeedbackToggleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackToggles to fetch.
     */
    orderBy?: FeedbackToggleOrderByWithRelationInput | FeedbackToggleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackToggles.
     */
    cursor?: FeedbackToggleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackToggles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackToggles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackToggles.
     */
    distinct?: FeedbackToggleScalarFieldEnum | FeedbackToggleScalarFieldEnum[]
  }

  /**
   * FeedbackToggle findFirstOrThrow
   */
  export type FeedbackToggleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackToggle to fetch.
     */
    where?: FeedbackToggleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackToggles to fetch.
     */
    orderBy?: FeedbackToggleOrderByWithRelationInput | FeedbackToggleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedbackToggles.
     */
    cursor?: FeedbackToggleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackToggles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackToggles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedbackToggles.
     */
    distinct?: FeedbackToggleScalarFieldEnum | FeedbackToggleScalarFieldEnum[]
  }

  /**
   * FeedbackToggle findMany
   */
  export type FeedbackToggleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * Filter, which FeedbackToggles to fetch.
     */
    where?: FeedbackToggleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedbackToggles to fetch.
     */
    orderBy?: FeedbackToggleOrderByWithRelationInput | FeedbackToggleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedbackToggles.
     */
    cursor?: FeedbackToggleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedbackToggles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedbackToggles.
     */
    skip?: number
    distinct?: FeedbackToggleScalarFieldEnum | FeedbackToggleScalarFieldEnum[]
  }

  /**
   * FeedbackToggle create
   */
  export type FeedbackToggleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * The data needed to create a FeedbackToggle.
     */
    data?: XOR<FeedbackToggleCreateInput, FeedbackToggleUncheckedCreateInput>
  }

  /**
   * FeedbackToggle createMany
   */
  export type FeedbackToggleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedbackToggles.
     */
    data: FeedbackToggleCreateManyInput | FeedbackToggleCreateManyInput[]
  }

  /**
   * FeedbackToggle createManyAndReturn
   */
  export type FeedbackToggleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * The data used to create many FeedbackToggles.
     */
    data: FeedbackToggleCreateManyInput | FeedbackToggleCreateManyInput[]
  }

  /**
   * FeedbackToggle update
   */
  export type FeedbackToggleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * The data needed to update a FeedbackToggle.
     */
    data: XOR<FeedbackToggleUpdateInput, FeedbackToggleUncheckedUpdateInput>
    /**
     * Choose, which FeedbackToggle to update.
     */
    where: FeedbackToggleWhereUniqueInput
  }

  /**
   * FeedbackToggle updateMany
   */
  export type FeedbackToggleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedbackToggles.
     */
    data: XOR<FeedbackToggleUpdateManyMutationInput, FeedbackToggleUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackToggles to update
     */
    where?: FeedbackToggleWhereInput
    /**
     * Limit how many FeedbackToggles to update.
     */
    limit?: number
  }

  /**
   * FeedbackToggle updateManyAndReturn
   */
  export type FeedbackToggleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * The data used to update FeedbackToggles.
     */
    data: XOR<FeedbackToggleUpdateManyMutationInput, FeedbackToggleUncheckedUpdateManyInput>
    /**
     * Filter which FeedbackToggles to update
     */
    where?: FeedbackToggleWhereInput
    /**
     * Limit how many FeedbackToggles to update.
     */
    limit?: number
  }

  /**
   * FeedbackToggle upsert
   */
  export type FeedbackToggleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * The filter to search for the FeedbackToggle to update in case it exists.
     */
    where: FeedbackToggleWhereUniqueInput
    /**
     * In case the FeedbackToggle found by the `where` argument doesn't exist, create a new FeedbackToggle with this data.
     */
    create: XOR<FeedbackToggleCreateInput, FeedbackToggleUncheckedCreateInput>
    /**
     * In case the FeedbackToggle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackToggleUpdateInput, FeedbackToggleUncheckedUpdateInput>
  }

  /**
   * FeedbackToggle delete
   */
  export type FeedbackToggleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
    /**
     * Filter which FeedbackToggle to delete.
     */
    where: FeedbackToggleWhereUniqueInput
  }

  /**
   * FeedbackToggle deleteMany
   */
  export type FeedbackToggleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedbackToggles to delete
     */
    where?: FeedbackToggleWhereInput
    /**
     * Limit how many FeedbackToggles to delete.
     */
    limit?: number
  }

  /**
   * FeedbackToggle without action
   */
  export type FeedbackToggleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedbackToggle
     */
    select?: FeedbackToggleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeedbackToggle
     */
    omit?: FeedbackToggleOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChallengeLockScalarFieldEnum: {
    id: 'id',
    locked: 'locked'
  };

  export type ChallengeLockScalarFieldEnum = (typeof ChallengeLockScalarFieldEnum)[keyof typeof ChallengeLockScalarFieldEnum]


  export const LeaderboardUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    score: 'score',
    updatedAt: 'updatedAt'
  };

  export type LeaderboardUserScalarFieldEnum = (typeof LeaderboardUserScalarFieldEnum)[keyof typeof LeaderboardUserScalarFieldEnum]


  export const ChallengeSubmissionScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    challengeId: 'challengeId',
    selectedLines: 'selectedLines',
    correct: 'correct',
    createdAt: 'createdAt'
  };

  export type ChallengeSubmissionScalarFieldEnum = (typeof ChallengeSubmissionScalarFieldEnum)[keyof typeof ChallengeSubmissionScalarFieldEnum]


  export const FlagSubmissionScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    challengeId: 'challengeId',
    flag: 'flag',
    correct: 'correct',
    createdAt: 'createdAt'
  };

  export type FlagSubmissionScalarFieldEnum = (typeof FlagSubmissionScalarFieldEnum)[keyof typeof FlagSubmissionScalarFieldEnum]


  export const SessionArchiveScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    teamName: 'teamName',
    archivedAt: 'archivedAt',
    userName: 'userName',
    avatar: 'avatar',
    score: 'score'
  };

  export type SessionArchiveScalarFieldEnum = (typeof SessionArchiveScalarFieldEnum)[keyof typeof SessionArchiveScalarFieldEnum]


  export const FeedbackResponseScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    teamName: 'teamName',
    comments: 'comments',
    createdAt: 'createdAt'
  };

  export type FeedbackResponseScalarFieldEnum = (typeof FeedbackResponseScalarFieldEnum)[keyof typeof FeedbackResponseScalarFieldEnum]


  export const FeedbackAnswerScalarFieldEnum: {
    id: 'id',
    responseId: 'responseId',
    questionId: 'questionId',
    labelSnapshot: 'labelSnapshot',
    rating: 'rating'
  };

  export type FeedbackAnswerScalarFieldEnum = (typeof FeedbackAnswerScalarFieldEnum)[keyof typeof FeedbackAnswerScalarFieldEnum]


  export const FeedbackQuestionScalarFieldEnum: {
    id: 'id',
    label: 'label',
    order: 'order',
    active: 'active',
    createdAt: 'createdAt'
  };

  export type FeedbackQuestionScalarFieldEnum = (typeof FeedbackQuestionScalarFieldEnum)[keyof typeof FeedbackQuestionScalarFieldEnum]


  export const FeedbackToggleScalarFieldEnum: {
    id: 'id',
    enabled: 'enabled',
    currentTeam: 'currentTeam'
  };

  export type FeedbackToggleScalarFieldEnum = (typeof FeedbackToggleScalarFieldEnum)[keyof typeof FeedbackToggleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ChallengeLockWhereInput = {
    AND?: ChallengeLockWhereInput | ChallengeLockWhereInput[]
    OR?: ChallengeLockWhereInput[]
    NOT?: ChallengeLockWhereInput | ChallengeLockWhereInput[]
    id?: StringFilter<"ChallengeLock"> | string
    locked?: BoolFilter<"ChallengeLock"> | boolean
  }

  export type ChallengeLockOrderByWithRelationInput = {
    id?: SortOrder
    locked?: SortOrder
  }

  export type ChallengeLockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeLockWhereInput | ChallengeLockWhereInput[]
    OR?: ChallengeLockWhereInput[]
    NOT?: ChallengeLockWhereInput | ChallengeLockWhereInput[]
    locked?: BoolFilter<"ChallengeLock"> | boolean
  }, "id">

  export type ChallengeLockOrderByWithAggregationInput = {
    id?: SortOrder
    locked?: SortOrder
    _count?: ChallengeLockCountOrderByAggregateInput
    _max?: ChallengeLockMaxOrderByAggregateInput
    _min?: ChallengeLockMinOrderByAggregateInput
  }

  export type ChallengeLockScalarWhereWithAggregatesInput = {
    AND?: ChallengeLockScalarWhereWithAggregatesInput | ChallengeLockScalarWhereWithAggregatesInput[]
    OR?: ChallengeLockScalarWhereWithAggregatesInput[]
    NOT?: ChallengeLockScalarWhereWithAggregatesInput | ChallengeLockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeLock"> | string
    locked?: BoolWithAggregatesFilter<"ChallengeLock"> | boolean
  }

  export type LeaderboardUserWhereInput = {
    AND?: LeaderboardUserWhereInput | LeaderboardUserWhereInput[]
    OR?: LeaderboardUserWhereInput[]
    NOT?: LeaderboardUserWhereInput | LeaderboardUserWhereInput[]
    id?: StringFilter<"LeaderboardUser"> | string
    name?: StringFilter<"LeaderboardUser"> | string
    avatar?: StringFilter<"LeaderboardUser"> | string
    score?: IntFilter<"LeaderboardUser"> | number
    updatedAt?: DateTimeFilter<"LeaderboardUser"> | Date | string
  }

  export type LeaderboardUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LeaderboardUserWhereInput | LeaderboardUserWhereInput[]
    OR?: LeaderboardUserWhereInput[]
    NOT?: LeaderboardUserWhereInput | LeaderboardUserWhereInput[]
    avatar?: StringFilter<"LeaderboardUser"> | string
    score?: IntFilter<"LeaderboardUser"> | number
    updatedAt?: DateTimeFilter<"LeaderboardUser"> | Date | string
  }, "id" | "name">

  export type LeaderboardUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaderboardUserCountOrderByAggregateInput
    _avg?: LeaderboardUserAvgOrderByAggregateInput
    _max?: LeaderboardUserMaxOrderByAggregateInput
    _min?: LeaderboardUserMinOrderByAggregateInput
    _sum?: LeaderboardUserSumOrderByAggregateInput
  }

  export type LeaderboardUserScalarWhereWithAggregatesInput = {
    AND?: LeaderboardUserScalarWhereWithAggregatesInput | LeaderboardUserScalarWhereWithAggregatesInput[]
    OR?: LeaderboardUserScalarWhereWithAggregatesInput[]
    NOT?: LeaderboardUserScalarWhereWithAggregatesInput | LeaderboardUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaderboardUser"> | string
    name?: StringWithAggregatesFilter<"LeaderboardUser"> | string
    avatar?: StringWithAggregatesFilter<"LeaderboardUser"> | string
    score?: IntWithAggregatesFilter<"LeaderboardUser"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"LeaderboardUser"> | Date | string
  }

  export type ChallengeSubmissionWhereInput = {
    AND?: ChallengeSubmissionWhereInput | ChallengeSubmissionWhereInput[]
    OR?: ChallengeSubmissionWhereInput[]
    NOT?: ChallengeSubmissionWhereInput | ChallengeSubmissionWhereInput[]
    id?: StringFilter<"ChallengeSubmission"> | string
    userName?: StringFilter<"ChallengeSubmission"> | string
    challengeId?: StringFilter<"ChallengeSubmission"> | string
    selectedLines?: StringFilter<"ChallengeSubmission"> | string
    correct?: BoolFilter<"ChallengeSubmission"> | boolean
    createdAt?: DateTimeFilter<"ChallengeSubmission"> | Date | string
  }

  export type ChallengeSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    selectedLines?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallengeSubmissionWhereInput | ChallengeSubmissionWhereInput[]
    OR?: ChallengeSubmissionWhereInput[]
    NOT?: ChallengeSubmissionWhereInput | ChallengeSubmissionWhereInput[]
    userName?: StringFilter<"ChallengeSubmission"> | string
    challengeId?: StringFilter<"ChallengeSubmission"> | string
    selectedLines?: StringFilter<"ChallengeSubmission"> | string
    correct?: BoolFilter<"ChallengeSubmission"> | boolean
    createdAt?: DateTimeFilter<"ChallengeSubmission"> | Date | string
  }, "id">

  export type ChallengeSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    selectedLines?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
    _count?: ChallengeSubmissionCountOrderByAggregateInput
    _max?: ChallengeSubmissionMaxOrderByAggregateInput
    _min?: ChallengeSubmissionMinOrderByAggregateInput
  }

  export type ChallengeSubmissionScalarWhereWithAggregatesInput = {
    AND?: ChallengeSubmissionScalarWhereWithAggregatesInput | ChallengeSubmissionScalarWhereWithAggregatesInput[]
    OR?: ChallengeSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ChallengeSubmissionScalarWhereWithAggregatesInput | ChallengeSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallengeSubmission"> | string
    userName?: StringWithAggregatesFilter<"ChallengeSubmission"> | string
    challengeId?: StringWithAggregatesFilter<"ChallengeSubmission"> | string
    selectedLines?: StringWithAggregatesFilter<"ChallengeSubmission"> | string
    correct?: BoolWithAggregatesFilter<"ChallengeSubmission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChallengeSubmission"> | Date | string
  }

  export type FlagSubmissionWhereInput = {
    AND?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    OR?: FlagSubmissionWhereInput[]
    NOT?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    id?: StringFilter<"FlagSubmission"> | string
    userName?: StringFilter<"FlagSubmission"> | string
    challengeId?: StringFilter<"FlagSubmission"> | string
    flag?: StringFilter<"FlagSubmission"> | string
    correct?: BoolFilter<"FlagSubmission"> | boolean
    createdAt?: DateTimeFilter<"FlagSubmission"> | Date | string
  }

  export type FlagSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type FlagSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    OR?: FlagSubmissionWhereInput[]
    NOT?: FlagSubmissionWhereInput | FlagSubmissionWhereInput[]
    userName?: StringFilter<"FlagSubmission"> | string
    challengeId?: StringFilter<"FlagSubmission"> | string
    flag?: StringFilter<"FlagSubmission"> | string
    correct?: BoolFilter<"FlagSubmission"> | boolean
    createdAt?: DateTimeFilter<"FlagSubmission"> | Date | string
  }, "id">

  export type FlagSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
    _count?: FlagSubmissionCountOrderByAggregateInput
    _max?: FlagSubmissionMaxOrderByAggregateInput
    _min?: FlagSubmissionMinOrderByAggregateInput
  }

  export type FlagSubmissionScalarWhereWithAggregatesInput = {
    AND?: FlagSubmissionScalarWhereWithAggregatesInput | FlagSubmissionScalarWhereWithAggregatesInput[]
    OR?: FlagSubmissionScalarWhereWithAggregatesInput[]
    NOT?: FlagSubmissionScalarWhereWithAggregatesInput | FlagSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlagSubmission"> | string
    userName?: StringWithAggregatesFilter<"FlagSubmission"> | string
    challengeId?: StringWithAggregatesFilter<"FlagSubmission"> | string
    flag?: StringWithAggregatesFilter<"FlagSubmission"> | string
    correct?: BoolWithAggregatesFilter<"FlagSubmission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FlagSubmission"> | Date | string
  }

  export type SessionArchiveWhereInput = {
    AND?: SessionArchiveWhereInput | SessionArchiveWhereInput[]
    OR?: SessionArchiveWhereInput[]
    NOT?: SessionArchiveWhereInput | SessionArchiveWhereInput[]
    id?: StringFilter<"SessionArchive"> | string
    sessionId?: StringFilter<"SessionArchive"> | string
    teamName?: StringFilter<"SessionArchive"> | string
    archivedAt?: DateTimeFilter<"SessionArchive"> | Date | string
    userName?: StringFilter<"SessionArchive"> | string
    avatar?: StringFilter<"SessionArchive"> | string
    score?: IntFilter<"SessionArchive"> | number
  }

  export type SessionArchiveOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    teamName?: SortOrder
    archivedAt?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
  }

  export type SessionArchiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionArchiveWhereInput | SessionArchiveWhereInput[]
    OR?: SessionArchiveWhereInput[]
    NOT?: SessionArchiveWhereInput | SessionArchiveWhereInput[]
    sessionId?: StringFilter<"SessionArchive"> | string
    teamName?: StringFilter<"SessionArchive"> | string
    archivedAt?: DateTimeFilter<"SessionArchive"> | Date | string
    userName?: StringFilter<"SessionArchive"> | string
    avatar?: StringFilter<"SessionArchive"> | string
    score?: IntFilter<"SessionArchive"> | number
  }, "id">

  export type SessionArchiveOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    teamName?: SortOrder
    archivedAt?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
    _count?: SessionArchiveCountOrderByAggregateInput
    _avg?: SessionArchiveAvgOrderByAggregateInput
    _max?: SessionArchiveMaxOrderByAggregateInput
    _min?: SessionArchiveMinOrderByAggregateInput
    _sum?: SessionArchiveSumOrderByAggregateInput
  }

  export type SessionArchiveScalarWhereWithAggregatesInput = {
    AND?: SessionArchiveScalarWhereWithAggregatesInput | SessionArchiveScalarWhereWithAggregatesInput[]
    OR?: SessionArchiveScalarWhereWithAggregatesInput[]
    NOT?: SessionArchiveScalarWhereWithAggregatesInput | SessionArchiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionArchive"> | string
    sessionId?: StringWithAggregatesFilter<"SessionArchive"> | string
    teamName?: StringWithAggregatesFilter<"SessionArchive"> | string
    archivedAt?: DateTimeWithAggregatesFilter<"SessionArchive"> | Date | string
    userName?: StringWithAggregatesFilter<"SessionArchive"> | string
    avatar?: StringWithAggregatesFilter<"SessionArchive"> | string
    score?: IntWithAggregatesFilter<"SessionArchive"> | number
  }

  export type FeedbackResponseWhereInput = {
    AND?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    OR?: FeedbackResponseWhereInput[]
    NOT?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    id?: StringFilter<"FeedbackResponse"> | string
    userName?: StringFilter<"FeedbackResponse"> | string
    teamName?: StringNullableFilter<"FeedbackResponse"> | string | null
    comments?: StringNullableFilter<"FeedbackResponse"> | string | null
    createdAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
    answers?: FeedbackAnswerListRelationFilter
  }

  export type FeedbackResponseOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    teamName?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    answers?: FeedbackAnswerOrderByRelationAggregateInput
  }

  export type FeedbackResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    OR?: FeedbackResponseWhereInput[]
    NOT?: FeedbackResponseWhereInput | FeedbackResponseWhereInput[]
    userName?: StringFilter<"FeedbackResponse"> | string
    teamName?: StringNullableFilter<"FeedbackResponse"> | string | null
    comments?: StringNullableFilter<"FeedbackResponse"> | string | null
    createdAt?: DateTimeFilter<"FeedbackResponse"> | Date | string
    answers?: FeedbackAnswerListRelationFilter
  }, "id">

  export type FeedbackResponseOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    teamName?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FeedbackResponseCountOrderByAggregateInput
    _max?: FeedbackResponseMaxOrderByAggregateInput
    _min?: FeedbackResponseMinOrderByAggregateInput
  }

  export type FeedbackResponseScalarWhereWithAggregatesInput = {
    AND?: FeedbackResponseScalarWhereWithAggregatesInput | FeedbackResponseScalarWhereWithAggregatesInput[]
    OR?: FeedbackResponseScalarWhereWithAggregatesInput[]
    NOT?: FeedbackResponseScalarWhereWithAggregatesInput | FeedbackResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedbackResponse"> | string
    userName?: StringWithAggregatesFilter<"FeedbackResponse"> | string
    teamName?: StringNullableWithAggregatesFilter<"FeedbackResponse"> | string | null
    comments?: StringNullableWithAggregatesFilter<"FeedbackResponse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FeedbackResponse"> | Date | string
  }

  export type FeedbackAnswerWhereInput = {
    AND?: FeedbackAnswerWhereInput | FeedbackAnswerWhereInput[]
    OR?: FeedbackAnswerWhereInput[]
    NOT?: FeedbackAnswerWhereInput | FeedbackAnswerWhereInput[]
    id?: StringFilter<"FeedbackAnswer"> | string
    responseId?: StringFilter<"FeedbackAnswer"> | string
    questionId?: StringFilter<"FeedbackAnswer"> | string
    labelSnapshot?: StringFilter<"FeedbackAnswer"> | string
    rating?: IntFilter<"FeedbackAnswer"> | number
    response?: XOR<FeedbackResponseScalarRelationFilter, FeedbackResponseWhereInput>
  }

  export type FeedbackAnswerOrderByWithRelationInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    labelSnapshot?: SortOrder
    rating?: SortOrder
    response?: FeedbackResponseOrderByWithRelationInput
  }

  export type FeedbackAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackAnswerWhereInput | FeedbackAnswerWhereInput[]
    OR?: FeedbackAnswerWhereInput[]
    NOT?: FeedbackAnswerWhereInput | FeedbackAnswerWhereInput[]
    responseId?: StringFilter<"FeedbackAnswer"> | string
    questionId?: StringFilter<"FeedbackAnswer"> | string
    labelSnapshot?: StringFilter<"FeedbackAnswer"> | string
    rating?: IntFilter<"FeedbackAnswer"> | number
    response?: XOR<FeedbackResponseScalarRelationFilter, FeedbackResponseWhereInput>
  }, "id">

  export type FeedbackAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    labelSnapshot?: SortOrder
    rating?: SortOrder
    _count?: FeedbackAnswerCountOrderByAggregateInput
    _avg?: FeedbackAnswerAvgOrderByAggregateInput
    _max?: FeedbackAnswerMaxOrderByAggregateInput
    _min?: FeedbackAnswerMinOrderByAggregateInput
    _sum?: FeedbackAnswerSumOrderByAggregateInput
  }

  export type FeedbackAnswerScalarWhereWithAggregatesInput = {
    AND?: FeedbackAnswerScalarWhereWithAggregatesInput | FeedbackAnswerScalarWhereWithAggregatesInput[]
    OR?: FeedbackAnswerScalarWhereWithAggregatesInput[]
    NOT?: FeedbackAnswerScalarWhereWithAggregatesInput | FeedbackAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedbackAnswer"> | string
    responseId?: StringWithAggregatesFilter<"FeedbackAnswer"> | string
    questionId?: StringWithAggregatesFilter<"FeedbackAnswer"> | string
    labelSnapshot?: StringWithAggregatesFilter<"FeedbackAnswer"> | string
    rating?: IntWithAggregatesFilter<"FeedbackAnswer"> | number
  }

  export type FeedbackQuestionWhereInput = {
    AND?: FeedbackQuestionWhereInput | FeedbackQuestionWhereInput[]
    OR?: FeedbackQuestionWhereInput[]
    NOT?: FeedbackQuestionWhereInput | FeedbackQuestionWhereInput[]
    id?: StringFilter<"FeedbackQuestion"> | string
    label?: StringFilter<"FeedbackQuestion"> | string
    order?: IntFilter<"FeedbackQuestion"> | number
    active?: BoolFilter<"FeedbackQuestion"> | boolean
    createdAt?: DateTimeFilter<"FeedbackQuestion"> | Date | string
  }

  export type FeedbackQuestionOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackQuestionWhereInput | FeedbackQuestionWhereInput[]
    OR?: FeedbackQuestionWhereInput[]
    NOT?: FeedbackQuestionWhereInput | FeedbackQuestionWhereInput[]
    label?: StringFilter<"FeedbackQuestion"> | string
    order?: IntFilter<"FeedbackQuestion"> | number
    active?: BoolFilter<"FeedbackQuestion"> | boolean
    createdAt?: DateTimeFilter<"FeedbackQuestion"> | Date | string
  }, "id">

  export type FeedbackQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackQuestionCountOrderByAggregateInput
    _avg?: FeedbackQuestionAvgOrderByAggregateInput
    _max?: FeedbackQuestionMaxOrderByAggregateInput
    _min?: FeedbackQuestionMinOrderByAggregateInput
    _sum?: FeedbackQuestionSumOrderByAggregateInput
  }

  export type FeedbackQuestionScalarWhereWithAggregatesInput = {
    AND?: FeedbackQuestionScalarWhereWithAggregatesInput | FeedbackQuestionScalarWhereWithAggregatesInput[]
    OR?: FeedbackQuestionScalarWhereWithAggregatesInput[]
    NOT?: FeedbackQuestionScalarWhereWithAggregatesInput | FeedbackQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeedbackQuestion"> | string
    label?: StringWithAggregatesFilter<"FeedbackQuestion"> | string
    order?: IntWithAggregatesFilter<"FeedbackQuestion"> | number
    active?: BoolWithAggregatesFilter<"FeedbackQuestion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FeedbackQuestion"> | Date | string
  }

  export type FeedbackToggleWhereInput = {
    AND?: FeedbackToggleWhereInput | FeedbackToggleWhereInput[]
    OR?: FeedbackToggleWhereInput[]
    NOT?: FeedbackToggleWhereInput | FeedbackToggleWhereInput[]
    id?: IntFilter<"FeedbackToggle"> | number
    enabled?: BoolFilter<"FeedbackToggle"> | boolean
    currentTeam?: StringNullableFilter<"FeedbackToggle"> | string | null
  }

  export type FeedbackToggleOrderByWithRelationInput = {
    id?: SortOrder
    enabled?: SortOrder
    currentTeam?: SortOrderInput | SortOrder
  }

  export type FeedbackToggleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackToggleWhereInput | FeedbackToggleWhereInput[]
    OR?: FeedbackToggleWhereInput[]
    NOT?: FeedbackToggleWhereInput | FeedbackToggleWhereInput[]
    enabled?: BoolFilter<"FeedbackToggle"> | boolean
    currentTeam?: StringNullableFilter<"FeedbackToggle"> | string | null
  }, "id">

  export type FeedbackToggleOrderByWithAggregationInput = {
    id?: SortOrder
    enabled?: SortOrder
    currentTeam?: SortOrderInput | SortOrder
    _count?: FeedbackToggleCountOrderByAggregateInput
    _avg?: FeedbackToggleAvgOrderByAggregateInput
    _max?: FeedbackToggleMaxOrderByAggregateInput
    _min?: FeedbackToggleMinOrderByAggregateInput
    _sum?: FeedbackToggleSumOrderByAggregateInput
  }

  export type FeedbackToggleScalarWhereWithAggregatesInput = {
    AND?: FeedbackToggleScalarWhereWithAggregatesInput | FeedbackToggleScalarWhereWithAggregatesInput[]
    OR?: FeedbackToggleScalarWhereWithAggregatesInput[]
    NOT?: FeedbackToggleScalarWhereWithAggregatesInput | FeedbackToggleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeedbackToggle"> | number
    enabled?: BoolWithAggregatesFilter<"FeedbackToggle"> | boolean
    currentTeam?: StringNullableWithAggregatesFilter<"FeedbackToggle"> | string | null
  }

  export type ChallengeLockCreateInput = {
    id: string
    locked: boolean
  }

  export type ChallengeLockUncheckedCreateInput = {
    id: string
    locked: boolean
  }

  export type ChallengeLockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeLockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeLockCreateManyInput = {
    id: string
    locked: boolean
  }

  export type ChallengeLockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeLockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeaderboardUserCreateInput = {
    id?: string
    name: string
    avatar: string
    score: number
    updatedAt?: Date | string
  }

  export type LeaderboardUserUncheckedCreateInput = {
    id?: string
    name: string
    avatar: string
    score: number
    updatedAt?: Date | string
  }

  export type LeaderboardUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUserCreateManyInput = {
    id?: string
    name: string
    avatar: string
    score: number
    updatedAt?: Date | string
  }

  export type LeaderboardUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeSubmissionCreateInput = {
    id?: string
    userName: string
    challengeId: string
    selectedLines: string
    correct: boolean
    createdAt?: Date | string
  }

  export type ChallengeSubmissionUncheckedCreateInput = {
    id?: string
    userName: string
    challengeId: string
    selectedLines: string
    correct: boolean
    createdAt?: Date | string
  }

  export type ChallengeSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    selectedLines?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    selectedLines?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeSubmissionCreateManyInput = {
    id?: string
    userName: string
    challengeId: string
    selectedLines: string
    correct: boolean
    createdAt?: Date | string
  }

  export type ChallengeSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    selectedLines?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    selectedLines?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionCreateInput = {
    id?: string
    userName: string
    challengeId: string
    flag: string
    correct: boolean
    createdAt?: Date | string
  }

  export type FlagSubmissionUncheckedCreateInput = {
    id?: string
    userName: string
    challengeId: string
    flag: string
    correct: boolean
    createdAt?: Date | string
  }

  export type FlagSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionCreateManyInput = {
    id?: string
    userName: string
    challengeId: string
    flag: string
    correct: boolean
    createdAt?: Date | string
  }

  export type FlagSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    challengeId?: StringFieldUpdateOperationsInput | string
    flag?: StringFieldUpdateOperationsInput | string
    correct?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionArchiveCreateInput = {
    id?: string
    sessionId: string
    teamName: string
    archivedAt?: Date | string
    userName: string
    avatar: string
    score: number
  }

  export type SessionArchiveUncheckedCreateInput = {
    id?: string
    sessionId: string
    teamName: string
    archivedAt?: Date | string
    userName: string
    avatar: string
    score: number
  }

  export type SessionArchiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type SessionArchiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type SessionArchiveCreateManyInput = {
    id?: string
    sessionId: string
    teamName: string
    archivedAt?: Date | string
    userName: string
    avatar: string
    score: number
  }

  export type SessionArchiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type SessionArchiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    archivedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackResponseCreateInput = {
    id?: string
    userName: string
    teamName?: string | null
    comments?: string | null
    createdAt?: Date | string
    answers?: FeedbackAnswerCreateNestedManyWithoutResponseInput
  }

  export type FeedbackResponseUncheckedCreateInput = {
    id?: string
    userName: string
    teamName?: string | null
    comments?: string | null
    createdAt?: Date | string
    answers?: FeedbackAnswerUncheckedCreateNestedManyWithoutResponseInput
  }

  export type FeedbackResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FeedbackAnswerUpdateManyWithoutResponseNestedInput
  }

  export type FeedbackResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: FeedbackAnswerUncheckedUpdateManyWithoutResponseNestedInput
  }

  export type FeedbackResponseCreateManyInput = {
    id?: string
    userName: string
    teamName?: string | null
    comments?: string | null
    createdAt?: Date | string
  }

  export type FeedbackResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackAnswerCreateInput = {
    id?: string
    questionId: string
    labelSnapshot: string
    rating: number
    response: FeedbackResponseCreateNestedOneWithoutAnswersInput
  }

  export type FeedbackAnswerUncheckedCreateInput = {
    id?: string
    responseId: string
    questionId: string
    labelSnapshot: string
    rating: number
  }

  export type FeedbackAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    labelSnapshot?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    response?: FeedbackResponseUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type FeedbackAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    labelSnapshot?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackAnswerCreateManyInput = {
    id?: string
    responseId: string
    questionId: string
    labelSnapshot: string
    rating: number
  }

  export type FeedbackAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    labelSnapshot?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    labelSnapshot?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackQuestionCreateInput = {
    id?: string
    label: string
    order: number
    active?: boolean
    createdAt?: Date | string
  }

  export type FeedbackQuestionUncheckedCreateInput = {
    id?: string
    label: string
    order: number
    active?: boolean
    createdAt?: Date | string
  }

  export type FeedbackQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackQuestionCreateManyInput = {
    id?: string
    label: string
    order: number
    active?: boolean
    createdAt?: Date | string
  }

  export type FeedbackQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackToggleCreateInput = {
    id?: number
    enabled?: boolean
    currentTeam?: string | null
  }

  export type FeedbackToggleUncheckedCreateInput = {
    id?: number
    enabled?: boolean
    currentTeam?: string | null
  }

  export type FeedbackToggleUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    currentTeam?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackToggleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    currentTeam?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackToggleCreateManyInput = {
    id?: number
    enabled?: boolean
    currentTeam?: string | null
  }

  export type FeedbackToggleUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    currentTeam?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeedbackToggleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    currentTeam?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChallengeLockCountOrderByAggregateInput = {
    id?: SortOrder
    locked?: SortOrder
  }

  export type ChallengeLockMaxOrderByAggregateInput = {
    id?: SortOrder
    locked?: SortOrder
  }

  export type ChallengeLockMinOrderByAggregateInput = {
    id?: SortOrder
    locked?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeaderboardUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardUserAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type LeaderboardUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaderboardUserSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChallengeSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    selectedLines?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    selectedLines?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type ChallengeSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    selectedLines?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type FlagSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type FlagSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type FlagSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    challengeId?: SortOrder
    flag?: SortOrder
    correct?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionArchiveCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    teamName?: SortOrder
    archivedAt?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
  }

  export type SessionArchiveAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SessionArchiveMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    teamName?: SortOrder
    archivedAt?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
  }

  export type SessionArchiveMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    teamName?: SortOrder
    archivedAt?: SortOrder
    userName?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
  }

  export type SessionArchiveSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FeedbackAnswerListRelationFilter = {
    every?: FeedbackAnswerWhereInput
    some?: FeedbackAnswerWhereInput
    none?: FeedbackAnswerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeedbackAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackResponseCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    teamName?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    teamName?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackResponseMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    teamName?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FeedbackResponseScalarRelationFilter = {
    is?: FeedbackResponseWhereInput
    isNot?: FeedbackResponseWhereInput
  }

  export type FeedbackAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    labelSnapshot?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackAnswerAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FeedbackAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    labelSnapshot?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    responseId?: SortOrder
    questionId?: SortOrder
    labelSnapshot?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackAnswerSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FeedbackQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackQuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FeedbackQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    order?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackQuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FeedbackToggleCountOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
    currentTeam?: SortOrder
  }

  export type FeedbackToggleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeedbackToggleMaxOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
    currentTeam?: SortOrder
  }

  export type FeedbackToggleMinOrderByAggregateInput = {
    id?: SortOrder
    enabled?: SortOrder
    currentTeam?: SortOrder
  }

  export type FeedbackToggleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FeedbackAnswerCreateNestedManyWithoutResponseInput = {
    create?: XOR<FeedbackAnswerCreateWithoutResponseInput, FeedbackAnswerUncheckedCreateWithoutResponseInput> | FeedbackAnswerCreateWithoutResponseInput[] | FeedbackAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: FeedbackAnswerCreateOrConnectWithoutResponseInput | FeedbackAnswerCreateOrConnectWithoutResponseInput[]
    createMany?: FeedbackAnswerCreateManyResponseInputEnvelope
    connect?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
  }

  export type FeedbackAnswerUncheckedCreateNestedManyWithoutResponseInput = {
    create?: XOR<FeedbackAnswerCreateWithoutResponseInput, FeedbackAnswerUncheckedCreateWithoutResponseInput> | FeedbackAnswerCreateWithoutResponseInput[] | FeedbackAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: FeedbackAnswerCreateOrConnectWithoutResponseInput | FeedbackAnswerCreateOrConnectWithoutResponseInput[]
    createMany?: FeedbackAnswerCreateManyResponseInputEnvelope
    connect?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FeedbackAnswerUpdateManyWithoutResponseNestedInput = {
    create?: XOR<FeedbackAnswerCreateWithoutResponseInput, FeedbackAnswerUncheckedCreateWithoutResponseInput> | FeedbackAnswerCreateWithoutResponseInput[] | FeedbackAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: FeedbackAnswerCreateOrConnectWithoutResponseInput | FeedbackAnswerCreateOrConnectWithoutResponseInput[]
    upsert?: FeedbackAnswerUpsertWithWhereUniqueWithoutResponseInput | FeedbackAnswerUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: FeedbackAnswerCreateManyResponseInputEnvelope
    set?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    disconnect?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    delete?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    connect?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    update?: FeedbackAnswerUpdateWithWhereUniqueWithoutResponseInput | FeedbackAnswerUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: FeedbackAnswerUpdateManyWithWhereWithoutResponseInput | FeedbackAnswerUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: FeedbackAnswerScalarWhereInput | FeedbackAnswerScalarWhereInput[]
  }

  export type FeedbackAnswerUncheckedUpdateManyWithoutResponseNestedInput = {
    create?: XOR<FeedbackAnswerCreateWithoutResponseInput, FeedbackAnswerUncheckedCreateWithoutResponseInput> | FeedbackAnswerCreateWithoutResponseInput[] | FeedbackAnswerUncheckedCreateWithoutResponseInput[]
    connectOrCreate?: FeedbackAnswerCreateOrConnectWithoutResponseInput | FeedbackAnswerCreateOrConnectWithoutResponseInput[]
    upsert?: FeedbackAnswerUpsertWithWhereUniqueWithoutResponseInput | FeedbackAnswerUpsertWithWhereUniqueWithoutResponseInput[]
    createMany?: FeedbackAnswerCreateManyResponseInputEnvelope
    set?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    disconnect?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    delete?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    connect?: FeedbackAnswerWhereUniqueInput | FeedbackAnswerWhereUniqueInput[]
    update?: FeedbackAnswerUpdateWithWhereUniqueWithoutResponseInput | FeedbackAnswerUpdateWithWhereUniqueWithoutResponseInput[]
    updateMany?: FeedbackAnswerUpdateManyWithWhereWithoutResponseInput | FeedbackAnswerUpdateManyWithWhereWithoutResponseInput[]
    deleteMany?: FeedbackAnswerScalarWhereInput | FeedbackAnswerScalarWhereInput[]
  }

  export type FeedbackResponseCreateNestedOneWithoutAnswersInput = {
    create?: XOR<FeedbackResponseCreateWithoutAnswersInput, FeedbackResponseUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutAnswersInput
    connect?: FeedbackResponseWhereUniqueInput
  }

  export type FeedbackResponseUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<FeedbackResponseCreateWithoutAnswersInput, FeedbackResponseUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: FeedbackResponseCreateOrConnectWithoutAnswersInput
    upsert?: FeedbackResponseUpsertWithoutAnswersInput
    connect?: FeedbackResponseWhereUniqueInput
    update?: XOR<XOR<FeedbackResponseUpdateToOneWithWhereWithoutAnswersInput, FeedbackResponseUpdateWithoutAnswersInput>, FeedbackResponseUncheckedUpdateWithoutAnswersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FeedbackAnswerCreateWithoutResponseInput = {
    id?: string
    questionId: string
    labelSnapshot: string
    rating: number
  }

  export type FeedbackAnswerUncheckedCreateWithoutResponseInput = {
    id?: string
    questionId: string
    labelSnapshot: string
    rating: number
  }

  export type FeedbackAnswerCreateOrConnectWithoutResponseInput = {
    where: FeedbackAnswerWhereUniqueInput
    create: XOR<FeedbackAnswerCreateWithoutResponseInput, FeedbackAnswerUncheckedCreateWithoutResponseInput>
  }

  export type FeedbackAnswerCreateManyResponseInputEnvelope = {
    data: FeedbackAnswerCreateManyResponseInput | FeedbackAnswerCreateManyResponseInput[]
  }

  export type FeedbackAnswerUpsertWithWhereUniqueWithoutResponseInput = {
    where: FeedbackAnswerWhereUniqueInput
    update: XOR<FeedbackAnswerUpdateWithoutResponseInput, FeedbackAnswerUncheckedUpdateWithoutResponseInput>
    create: XOR<FeedbackAnswerCreateWithoutResponseInput, FeedbackAnswerUncheckedCreateWithoutResponseInput>
  }

  export type FeedbackAnswerUpdateWithWhereUniqueWithoutResponseInput = {
    where: FeedbackAnswerWhereUniqueInput
    data: XOR<FeedbackAnswerUpdateWithoutResponseInput, FeedbackAnswerUncheckedUpdateWithoutResponseInput>
  }

  export type FeedbackAnswerUpdateManyWithWhereWithoutResponseInput = {
    where: FeedbackAnswerScalarWhereInput
    data: XOR<FeedbackAnswerUpdateManyMutationInput, FeedbackAnswerUncheckedUpdateManyWithoutResponseInput>
  }

  export type FeedbackAnswerScalarWhereInput = {
    AND?: FeedbackAnswerScalarWhereInput | FeedbackAnswerScalarWhereInput[]
    OR?: FeedbackAnswerScalarWhereInput[]
    NOT?: FeedbackAnswerScalarWhereInput | FeedbackAnswerScalarWhereInput[]
    id?: StringFilter<"FeedbackAnswer"> | string
    responseId?: StringFilter<"FeedbackAnswer"> | string
    questionId?: StringFilter<"FeedbackAnswer"> | string
    labelSnapshot?: StringFilter<"FeedbackAnswer"> | string
    rating?: IntFilter<"FeedbackAnswer"> | number
  }

  export type FeedbackResponseCreateWithoutAnswersInput = {
    id?: string
    userName: string
    teamName?: string | null
    comments?: string | null
    createdAt?: Date | string
  }

  export type FeedbackResponseUncheckedCreateWithoutAnswersInput = {
    id?: string
    userName: string
    teamName?: string | null
    comments?: string | null
    createdAt?: Date | string
  }

  export type FeedbackResponseCreateOrConnectWithoutAnswersInput = {
    where: FeedbackResponseWhereUniqueInput
    create: XOR<FeedbackResponseCreateWithoutAnswersInput, FeedbackResponseUncheckedCreateWithoutAnswersInput>
  }

  export type FeedbackResponseUpsertWithoutAnswersInput = {
    update: XOR<FeedbackResponseUpdateWithoutAnswersInput, FeedbackResponseUncheckedUpdateWithoutAnswersInput>
    create: XOR<FeedbackResponseCreateWithoutAnswersInput, FeedbackResponseUncheckedCreateWithoutAnswersInput>
    where?: FeedbackResponseWhereInput
  }

  export type FeedbackResponseUpdateToOneWithWhereWithoutAnswersInput = {
    where?: FeedbackResponseWhereInput
    data: XOR<FeedbackResponseUpdateWithoutAnswersInput, FeedbackResponseUncheckedUpdateWithoutAnswersInput>
  }

  export type FeedbackResponseUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackResponseUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackAnswerCreateManyResponseInput = {
    id?: string
    questionId: string
    labelSnapshot: string
    rating: number
  }

  export type FeedbackAnswerUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    labelSnapshot?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackAnswerUncheckedUpdateWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    labelSnapshot?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type FeedbackAnswerUncheckedUpdateManyWithoutResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    labelSnapshot?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}