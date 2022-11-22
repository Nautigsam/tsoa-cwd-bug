import {Controller, Route} from "tsoa"

@Route("test")
export class TestController extends Controller {
	@Get()
	sayHello() {
		return "Hello World!";
	}
}
