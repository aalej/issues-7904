# Repro for issue 7904

## Versions

firebase-tools: v13.24.0<br>

## Steps to reproduce

1. Install dependencies
   - Run `cd functions/codebaseA`
   - Run `npm i`
   - Run `cd ../`
   - Run `cd codebaseB`
2. Run `firebase deploy --only functions:codebase-a --project PROJECT_ID`
   - Deploys only functions in `codebase-a` (`function1A` and `function1B`)
   - Outputs

```
$ firebase deploy --only functions:codebase-a --project PROJECT_ID

=== Deploying to 'PROJECT_ID'...

i  deploying functions
Running command: npm --prefix "$RESOURCE_DIR" run lint

> lint
> eslint .

✔  functions: Finished running predeploy script.
i  functions: preparing codebase codebase-a for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
✔  artifactregistry: required API artifactregistry.googleapis.com is enabled
i  functions: Loading and analyzing source code for codebase codebase-a to determine what to deploy
Serving at port 8305

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
✔  extensions: required API firebaseextensions.googleapis.com is enabled
i  functions: preparing functions/codebaseA directory for uploading...
i  functions: packaged /Users/<PATH>/7904/functions/codebaseA (69.28 KB) for uploading
✔  functions: functions/codebaseA folder uploaded successfully
i  functions: creating Node.js 18 (1st Gen) function codebase-a:function1A(us-central1)...
i  functions: creating Node.js 18 (1st Gen) function codebase-a:function2A(us-central1)...
✔  functions[codebase-a:function1A(us-central1)] Successful create operation.
✔  functions[codebase-a:function2A(us-central1)] Successful create operation.
Function URL (codebase-a:function1A(us-central1)): https://us-central1-PROJECT_ID.cloudfunctions.net/function1A
Function URL (codebase-a:function2A(us-central1)): https://us-central1-PROJECT_ID.cloudfunctions.net/function2A
i  functions: cleaning up build files...

✔  Deploy complete!
```

3. Run `firebase deploy --only functions:codebase-a:function1A,functions:codebase-a:function2A --project PROJECT_ID`
   - Deploys only functions in `codebase-a` (`function1A` and `function1B`)
   - Outputs

```
$ firebase deploy --only functions:codebase-a:function1A,functions:codebase-a:function2A --project PROJECT_ID

=== Deploying to 'PROJECT_ID'...

i  deploying functions
Running command: npm --prefix "$RESOURCE_DIR" run lint

> lint
> eslint .

✔  functions: Finished running predeploy script.
Running command: npm --prefix "$RESOURCE_DIR" run lint

> lint
> eslint .

✔  functions: Finished running predeploy script.
i  functions: preparing codebase codebase-a for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
✔  artifactregistry: required API artifactregistry.googleapis.com is enabled
i  functions: Loading and analyzing source code for codebase codebase-a to determine what to deploy
Serving at port 8936

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
✔  extensions: required API firebaseextensions.googleapis.com is enabled
i  functions: preparing functions/codebaseA directory for uploading...
i  functions: packaged /Users/<PATH>/7904/functions/codebaseA (69.28 KB) for uploading
✔  functions: functions/codebaseA folder uploaded successfully
i  functions: updating Node.js 18 (1st Gen) function codebase-a:function1A(us-central1)...
i  functions: updating Node.js 18 (1st Gen) function codebase-a:function2A(us-central1)...
✔  functions[codebase-a:function2A(us-central1)] Successful update operation.
✔  functions[codebase-a:function1A(us-central1)] Successful update operation.
Function URL (codebase-a:function1A(us-central1)): https://us-central1-PROJECT_ID.cloudfunctions.net/function1A
Function URL (codebase-a:function2A(us-central1)): https://us-central1-PROJECT_ID.cloudfunctions.net/function2A
i  functions: cleaning up build files...

✔  Deploy complete!
```
