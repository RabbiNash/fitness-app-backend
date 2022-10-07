export class MissingArguments{

    public static missingArguments(requiredArguments:string[] , passedArguments:any) :string[]{

        return requiredArguments.filter((par: any) => passedArguments[par] === null || passedArguments[par] === undefined);

    }
}