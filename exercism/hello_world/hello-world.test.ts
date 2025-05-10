import { hello } from "./hello-world"
it('says hello world', () => {
    expect(hello()).toEqual('Hello, World')
})