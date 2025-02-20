// package: viam.service.slam.v1
// file: service/slam/v1/slam.proto

import * as jspb from "google-protobuf";
import * as common_v1_common_pb from "../../../common/v1/common_pb";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class GetPositionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionRequest): GetPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionRequest;
  static deserializeBinaryFromReader(message: GetPositionRequest, reader: jspb.BinaryReader): GetPositionRequest;
}

export namespace GetPositionRequest {
  export type AsObject = {
    name: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPositionResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.PoseInFrame | undefined;
  setPose(value?: common_v1_common_pb.PoseInFrame): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionResponse): GetPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionResponse;
  static deserializeBinaryFromReader(message: GetPositionResponse, reader: jspb.BinaryReader): GetPositionResponse;
}

export namespace GetPositionResponse {
  export type AsObject = {
    pose?: common_v1_common_pb.PoseInFrame.AsObject,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetMapRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  hasCameraPosition(): boolean;
  clearCameraPosition(): void;
  getCameraPosition(): common_v1_common_pb.Pose | undefined;
  setCameraPosition(value?: common_v1_common_pb.Pose): void;

  getIncludeRobotMarker(): boolean;
  setIncludeRobotMarker(value: boolean): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMapRequest): GetMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMapRequest;
  static deserializeBinaryFromReader(message: GetMapRequest, reader: jspb.BinaryReader): GetMapRequest;
}

export namespace GetMapRequest {
  export type AsObject = {
    name: string,
    mimeType: string,
    cameraPosition?: common_v1_common_pb.Pose.AsObject,
    includeRobotMarker: boolean,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetMapResponse extends jspb.Message {
  hasPointCloud(): boolean;
  clearPointCloud(): void;
  getPointCloud(): common_v1_common_pb.PointCloudObject | undefined;
  setPointCloud(value?: common_v1_common_pb.PointCloudObject): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): void;

  getMimeType(): string;
  setMimeType(value: string): void;

  getMapCase(): GetMapResponse.MapCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMapResponse): GetMapResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMapResponse;
  static deserializeBinaryFromReader(message: GetMapResponse, reader: jspb.BinaryReader): GetMapResponse;
}

export namespace GetMapResponse {
  export type AsObject = {
    pointCloud?: common_v1_common_pb.PointCloudObject.AsObject,
    image: Uint8Array | string,
    mimeType: string,
  }

  export enum MapCase {
    MAP_NOT_SET = 0,
    POINT_CLOUD = 1,
    IMAGE = 2,
  }
}

export class GetPositionNewRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionNewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionNewRequest): GetPositionNewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionNewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionNewRequest;
  static deserializeBinaryFromReader(message: GetPositionNewRequest, reader: jspb.BinaryReader): GetPositionNewRequest;
}

export namespace GetPositionNewRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetPositionNewResponse extends jspb.Message {
  hasPose(): boolean;
  clearPose(): void;
  getPose(): common_v1_common_pb.Pose | undefined;
  setPose(value?: common_v1_common_pb.Pose): void;

  getComponentReference(): string;
  setComponentReference(value: string): void;

  hasExtra(): boolean;
  clearExtra(): void;
  getExtra(): google_protobuf_struct_pb.Struct | undefined;
  setExtra(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionNewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionNewResponse): GetPositionNewResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionNewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionNewResponse;
  static deserializeBinaryFromReader(message: GetPositionNewResponse, reader: jspb.BinaryReader): GetPositionNewResponse;
}

export namespace GetPositionNewResponse {
  export type AsObject = {
    pose?: common_v1_common_pb.Pose.AsObject,
    componentReference: string,
    extra?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class GetPointCloudMapRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPointCloudMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPointCloudMapRequest): GetPointCloudMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPointCloudMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPointCloudMapRequest;
  static deserializeBinaryFromReader(message: GetPointCloudMapRequest, reader: jspb.BinaryReader): GetPointCloudMapRequest;
}

export namespace GetPointCloudMapRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetPointCloudMapResponse extends jspb.Message {
  getPointCloudPcd(): Uint8Array | string;
  getPointCloudPcd_asU8(): Uint8Array;
  getPointCloudPcd_asB64(): string;
  setPointCloudPcd(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPointCloudMapResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPointCloudMapResponse): GetPointCloudMapResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPointCloudMapResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPointCloudMapResponse;
  static deserializeBinaryFromReader(message: GetPointCloudMapResponse, reader: jspb.BinaryReader): GetPointCloudMapResponse;
}

export namespace GetPointCloudMapResponse {
  export type AsObject = {
    pointCloudPcd: Uint8Array | string,
  }
}

export class GetInternalStateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInternalStateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInternalStateRequest): GetInternalStateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInternalStateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInternalStateRequest;
  static deserializeBinaryFromReader(message: GetInternalStateRequest, reader: jspb.BinaryReader): GetInternalStateRequest;
}

export namespace GetInternalStateRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetInternalStateResponse extends jspb.Message {
  getInternalState(): Uint8Array | string;
  getInternalState_asU8(): Uint8Array;
  getInternalState_asB64(): string;
  setInternalState(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInternalStateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInternalStateResponse): GetInternalStateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInternalStateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInternalStateResponse;
  static deserializeBinaryFromReader(message: GetInternalStateResponse, reader: jspb.BinaryReader): GetInternalStateResponse;
}

export namespace GetInternalStateResponse {
  export type AsObject = {
    internalState: Uint8Array | string,
  }
}

