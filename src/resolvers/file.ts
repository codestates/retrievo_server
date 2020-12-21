// import { Resolver, Mutation, Arg } from "type-graphql";
// import { GraphQLUpload } from "graphql-upload";
// import { createWriteStream } from "fs";

// import { Upload } from "../../types/upload";

// @Resolver()
// export class FileResolver {
//   @Mutation(() => Boolean)
//   async addFile(
//     @Arg("file", () => GraphQLUpload)
//     { createReadStream, filename }: Upload
//   ): Promise<boolean> {
//     return new Promise(async (resolve, reject) => createReadStream());
//   }
// }
