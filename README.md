# How to mock ES modules with Jest (both Javascript and Typescript examples)

After spending a lot of time fixing all of the problems I faced for mocking ES modules with Jest, I decided to create a repository to have a full-working examples how we can do that. It's only based on my findings, so it may not be an ideal solution or even it can be wrong in some situations. So, please use it with our own risk!

Examples include:

- simple: In this example, we only have one ES module, we mock it and then call it
- consumer: In this example, we have one ES module which uses another ES module. We mock the independent module and call the dependent module to see if mocked function is called properly
- consumer-ts: It's the same as the previous one, but the project is in Typescript. We use ts-jest to test it
- consumer-ts-absolute: It's the same as the previous one, but all of the module paths are absolute

I hope it can be helpful!
Habib
