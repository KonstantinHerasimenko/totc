/* eslint-disable @typescript-eslint/no-explicit-any */
const importAll = (context:any) => context.keys().map((key:any) => context(key).default)

export default importAll