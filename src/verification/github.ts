const { execSync } = require("child_process");


export const clone = async (githubUrl, directory) => {

  if (githubUrl.substr(githubUrl.length - 4) !== '.sol') {
    throw new Error('Link should point to specific sol contract')
  }

  if (githubUrl.indexOf('/blob')===-1) {
    throw new Error('Use blob github link')
  }

  if (githubUrl.substr(0, 18) !== "https://github.com") {
    throw new Error ('Only contracts hosted on github are allowed')
  }

  const [actualUrl, rest] = githubUrl.split("/blob/");
  const [branchOrCommit] = rest.split("/");

  execSync(`git clone ${actualUrl} ${directory}`);
  execSync(`cd ${directory} && git checkout ${branchOrCommit}`);
};

export const getCommitHash = async (directory) => {
  const output = execSync(`cd ${directory} && git rev-parse HEAD`)
  return output.toString().split('\n')[0]
}