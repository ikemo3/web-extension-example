// semverからバージョン情報を取得する関数
// https://crxjs.dev/vite-plugin/concepts/manifest
export function convertSemverToManifestVersion(version: string) {
  const { major, minor, patch, label } = parseSemver(version);

  // 0.0.0の場合はエラーを返す
  if (major === "0" && minor === "0" && patch === "0") {
    throw new Error(`Invalid version: ${version}`);
  }

  if (label === "0") {
    return `${major}.${minor}.${patch}`;
  } else {
    return `${major}.${minor}.${patch}.${label}`;
  }
}

function parseSemver(version: string) {
  // Convert from Semver (example: 0.1.0-beta6)
  const [major, minor, patch, label = "0"] = version
    // can only contain digits, dots, or dash
    .replace(/[^\d.-]+/g, "")
    // split into version parts
    .split(/[.-]/);

  return {
    major,
    minor: minor ?? "0",
    patch: patch ?? "0",
    label,
  };
}
