/**
 * Created by ed on 21/04/2018.
 */

'use strict';

import {ApiAiClient} from 'api-ai-javascript';

const token = '3f0492bce1d74f66a4e254f62e95b7df';

class ChatAPI {
  constructor() {
    this._actions = {};
    this.client = new ApiAiClient({accessToken: token});
  }

  sendMessage(message) {
    return this.client.textRequest(message).then(result => {
      console.log(result);
      return result.result;
    }).then(result => ({
        intentName: result.metadata.intentName,
        parameters: result.parameters,
        speech: result.fulfillment.speech,
      })).then(({intentName, parameters, speech}) => {
        if (this._actions[intentName]) {
          for (let parameter in parameters) {
            if (!parameters[parameter]) return speech;
          }
          this._actions[intentName].callback(parameters);
        }
        return speech;
      });
  }

  registerAction(name, callback) {
    this._actions[name] = callback;
  }
}

export default new ChatAPI();
