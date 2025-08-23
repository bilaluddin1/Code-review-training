
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
    FlagSubmission: 'FlagSubmission'
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
      modelProps: "challengeLock" | "leaderboardUser" | "challengeSubmission" | "flagSubmission"
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
  }

  export type LeaderboardUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    score: number | null
  }

  export type LeaderboardUserCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    score: number
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
  }

  export type LeaderboardUserMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    score?: true
  }

  export type LeaderboardUserCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    score?: true
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
  }, ExtArgs["result"]["leaderboardUser"]>

  export type LeaderboardUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    score?: boolean
  }, ExtArgs["result"]["leaderboardUser"]>

  export type LeaderboardUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    score?: boolean
  }, ExtArgs["result"]["leaderboardUser"]>

  export type LeaderboardUserSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    score?: boolean
  }

  export type LeaderboardUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "score", ExtArgs["result"]["leaderboardUser"]>

  export type $LeaderboardUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderboardUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatar: string
      score: number
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
    score: 'score'
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


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
  }

  export type LeaderboardUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
  }

  export type LeaderboardUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LeaderboardUserWhereInput | LeaderboardUserWhereInput[]
    OR?: LeaderboardUserWhereInput[]
    NOT?: LeaderboardUserWhereInput | LeaderboardUserWhereInput[]
    avatar?: StringFilter<"LeaderboardUser"> | string
    score?: IntFilter<"LeaderboardUser"> | number
  }, "id" | "name">

  export type LeaderboardUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
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
  }

  export type LeaderboardUserUncheckedCreateInput = {
    id?: string
    name: string
    avatar: string
    score: number
  }

  export type LeaderboardUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderboardUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderboardUserCreateManyInput = {
    id?: string
    name: string
    avatar: string
    score: number
  }

  export type LeaderboardUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
  }

  export type LeaderboardUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
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

  export type LeaderboardUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
  }

  export type LeaderboardUserAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type LeaderboardUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
  }

  export type LeaderboardUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    score?: SortOrder
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