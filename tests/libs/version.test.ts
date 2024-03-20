import { convertSemverToManifestVersion } from "../../src/libs/version";

describe("convertSemverToManifestVersion", () => {
  it("0", () => {
    expect(() => convertSemverToManifestVersion("0")).toThrowError(
      "Invalid version: 0",
    );
  });

  it("0.0.0", () => {
    expect(() => convertSemverToManifestVersion("0.0.0")).toThrowError(
      "Invalid version: 0.0.0",
    );
  });

  it("0.0.1", () => {
    expect(convertSemverToManifestVersion("0.0.1")).toEqual("0.0.1");
  });

  it("0.1.0", () => {
    expect(convertSemverToManifestVersion("0.1.0")).toEqual("0.1.0");
  });

  it("1.0.0", () => {
    expect(convertSemverToManifestVersion("1.0.0")).toEqual("1.0.0");
  });

  it("1.0.0-beta6", () => {
    expect(convertSemverToManifestVersion("1.0.0-beta6")).toEqual("1.0.0.6");
  });
});
