import {Registry} from "../../registry";
import {GetMocksHandler} from "./GetMocksHandler";

/** Handler that takes care of getting all the mocks for runtime. */
export class RuntimeGetMocksHandler extends GetMocksHandler {
    /** @inheritDoc */
    getSelections(registry: Registry): {} {
        return registry.selections;
    }
}
