// import AWS from "aws-sdk";
// import stream from "stream";
// import { UploadedFileResponse, File, IUploader } from "../types";

// type S3UploadStream = {
//   writeStream: stream.PassThrough;
//   promise: Promise<AWS.S3.ManagedUpload.SendData>;
// };

// type S3UploadConfig = {
//   accessKeyId: string;
//   secretAccessKey: string;
//   destinationBucketName: string;
//   region?: string;
// };

// export class AWSS3Uploader implements IUploader {
//   private s3: AWS.S3;

//   public config: S3UploadConfig;

//   constructor(config: S3UploadConfig) {
//     AWS.config = new AWS.Config();
//     AWS.config.update({
//       region: process.env.S3_REGION,
//       accessKeyId: process.env.S3_ACCESS_KEY,
//       secretAccessKey: process.env.S3_SECRET,
//     });

//     this.s3 = new AWS.S3();
//     this.config = config;
//   }
//   /* 내부함수들 */

//   async singleFileUploadResolver(
//     parent,
//     { file }: { file: Promise<File> }
//   ): Promise<UploadedFileResponse> {
//     const filePath = this.createDestinationFilePath(
//       filename,
//       mimetype,
//       encoding
//     );

//     return { filename, mimetype, encoding, url: "" };
//   }
// }

// export default AWSS3Uploader;
