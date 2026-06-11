export type DiagnosticSupportBundleFile = {
    path: string;
    mediaType: string;
    content: string;
};
/** Manifest entry for one written support bundle file. */
export type DiagnosticSupportBundleContent = {
    path: string;
    mediaType: string;
    bytes: number;
};
/** Creates a JSON support-bundle file with a safe relative path. */
export declare function jsonSupportBundleFile(pathName: string, value: unknown): DiagnosticSupportBundleFile;
/** Creates an NDJSON support-bundle file with a safe relative path. */
export declare function jsonlSupportBundleFile(pathName: string, lines: readonly string[]): DiagnosticSupportBundleFile;
/** Creates a UTF-8 text support-bundle file with a safe relative path. */
export declare function textSupportBundleFile(pathName: string, content: string): DiagnosticSupportBundleFile;
/** Summarizes support-bundle files for the bundle manifest. */
export declare function supportBundleContents(files: readonly DiagnosticSupportBundleFile[]): DiagnosticSupportBundleContent[];
/** Writes support-bundle files to a new private directory. */
export declare function writeSupportBundleDirectory(params: {
    outputDir: string;
    files: readonly DiagnosticSupportBundleFile[];
}): Promise<DiagnosticSupportBundleContent[]>;
/** Writes support-bundle files to a private zip archive and returns its byte size. */
export declare function writeSupportBundleZip(params: {
    outputPath: string;
    files: readonly DiagnosticSupportBundleFile[];
    compressionLevel?: number;
}): Promise<number>;
