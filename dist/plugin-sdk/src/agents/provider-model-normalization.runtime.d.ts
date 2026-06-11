/** Normalizes provider model ids through plugin runtime hooks when available. */
export declare function normalizeProviderModelIdWithRuntime(params: {
    provider: string;
    context: {
        provider: string;
        modelId: string;
    };
}): string | undefined;
