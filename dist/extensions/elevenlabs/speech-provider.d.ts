import { qn as SpeechProviderPlugin } from "../../types-Cqh78_VH.js";
import { n as isValidElevenLabsVoiceId } from "../../shared-DkwBVm73.js";

//#region extensions/elevenlabs/speech-provider.d.ts
declare const isValidVoiceId: typeof isValidElevenLabsVoiceId;
declare function buildElevenLabsSpeechProvider(): SpeechProviderPlugin;
//#endregion
export { buildElevenLabsSpeechProvider, isValidVoiceId };