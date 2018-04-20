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
    return this.client.textRequest(message).then(result => result.result).then(result => ({
        intentName: result.metadata.intentName,
        parameters: result.parameters,
        fullfilment: result.fulfillment,
      }).then(({intentName, parameters, fullfilment}) => {
        if (this._actions[intentName]) {
          for (let parameter of this._actions[intentName].parameters) {
            if (!parameters[parameter]) return;
          }
          this._actions[intentName].callback(parameters);
          return fullfilment;
        }
      }),
    );
  }

  registerAction(name, callback, parameters = []) {
    this._actions[name] = {
      callback,
      parameters,
    };
  }
}

export default new ChatAPI();
