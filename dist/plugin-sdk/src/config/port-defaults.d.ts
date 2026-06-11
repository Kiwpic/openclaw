type PortRange = {
    start: number;
    end: number;
};
/** Default browser-CDP sidecar port range used when no browser-control-relative range is safe. */
export declare const DEFAULT_BROWSER_CDP_PORT_RANGE_START = 18800;
/** Inclusive end of the default browser-CDP sidecar port range. */
export declare const DEFAULT_BROWSER_CDP_PORT_RANGE_END = 18899;
/** Derives the browser-CDP sidecar range from the browser-control port when it fits. */
export declare function deriveDefaultBrowserCdpPortRange(browserControlPort: number): PortRange;
export {};
