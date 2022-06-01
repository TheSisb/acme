describe("project create", () => {
  it("should create a project", async (ctx) => {
    // arrange
    const name = ctx.faker.company.bsBuzz();
    // act
    const cli = await ctx.runCommand(["project", "create", name]);
    // assert
    expect(await cli.findByText(`Project ${name} created`)).toBeInTheConsole();
  });
});
