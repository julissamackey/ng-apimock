import 'reflect-metadata';
import {inject, injectable} from 'inversify';

import * as http from 'http';

import Handler from '../handler';
import Mock from '../../../domain/mock';
import MocksState from '../../../state/mocks.state';

/**  Handler for a echoing a request. */
@injectable()
class EchoRequestHandler implements Handler {
    @inject('MocksState')
    private mocksState: MocksState;

    /** {@inheritDoc}.*/
    handle(request: http.IncomingMessage, response: http.ServerResponse, next: Function,
           params: { id: string, mock: Mock, payload: string }): void {
        const echo: boolean = this.mocksState.getEcho(params.mock.name, params.id);

        if (echo) {
            console.log(`${params.mock.request.method} request made on '${params.mock.request.url}' with payload: '${JSON.stringify(params.payload)}`);
        }
    }
}

export default EchoRequestHandler;
