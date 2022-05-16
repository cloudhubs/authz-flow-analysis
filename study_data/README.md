## README

This is the set of scripts used to validate the accuracy of our data. Each script is documented with regard to what it generates and how it outputs this.
To determine the accuracy of our approach, you can rerun the scripts, take their output, and run a JSON diff against them using your preferred JSON diff
tool.

To verify the accuracy of the approach when merging `CREATE` and `UPDATE` into a single permission, simply run the output of the other scripts through the following:
```js
let x = /* output from the script */
Object.keys(x).filter((key) => key.endsWith("CREATE")).map((key) => {
  const baseKey = key.substring(0, key.length - 6);
  const newKey = `${baseKey}CREATE_OR_UPDATE`;
  const updateKey = `${baseKey}UPDATE`;
  copyX[newKey] = copyX[key] || copyX[updateKey];
  delete copyX[key];
  delete copyX[updateKey];
});
console.log(x);
```

Here, the console output will have `CREATE` and `UPDATE` merged, allowing a JSON diff of the results considering these as one permission (thus backing our claims
regarding the source of error in our output).
