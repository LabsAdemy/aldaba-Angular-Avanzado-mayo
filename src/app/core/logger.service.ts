import { Inject, Injectable } from "@angular/core";
import { APP_VERSION, ONLY_ERRORS } from "./core.module";

@Injectable()
export class LoggerService {
  //private readonly appVersion = "1.0.0";
  // private readonly onlyErrors = true;

  constructor(@Inject(APP_VERSION) private appVersion: string, @Inject(ONLY_ERRORS) private onlyErrors: boolean) {}

  log(message: string, payload: unknown) {
    if (this.onlyErrors) return;
    const logMessage = `ℹ️ ${this.appVersion} - ${message}`;
    console.log(logMessage, payload);
  }

  warn(message: string, payload: unknown) {
    if (this.onlyErrors) return;
    const logMessage = `🚧 ${this.appVersion} - ${message}`;
    console.warn(logMessage, payload);
  }
  error(message: string, error: Error) {
    const logMessage = `💣 ${this.appVersion} - ${message} - ERR: ${error.message}`;
    console.warn(logMessage);
  }
}
