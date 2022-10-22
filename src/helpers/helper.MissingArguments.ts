export  const CheckMissingParams =   (requiredPars: string[], passedPars: any) : Promise<string[]> | [] => {


    return  Promise .resolve(requiredPars.filter((par: any) => passedPars[par] === null || passedPars[par] === undefined));
}