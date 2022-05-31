describe("project create", () => {
  it("should create a project", async (ctx) => {
    // arrange
    const name = ctx.faker.company.companyName();
    // act
    const cli = await ctx.runCommand(["project", "create", name]);
    // assert
    expect(await cli.findByText(`Creating project ${name}`)).toBeInTheConsole();
  });
});
