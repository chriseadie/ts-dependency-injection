

class DI {
    services: { [key: string]: any };
    constructor() {
        this.services = {}
    }

    public AddService(key: string, instance: any) {
        this.services = Object.assign(this.services, { [key]: instance });
        return this;
    }

    public GetService<T>(key: string): T {
        const dependencies = this.resolveDependencies(this.services[key])
        return new this.services[key](...dependencies);
    }

    private resolveDependencies(dependency: any): Array<any> {
        const di = dependency.toString().split(/constructor\s*[^\(]*\(\s*([^\)]*)\)/m);
        if (di.length > 1) {

            var injecables = di[1].split(",")

            var dependencies = new Array();

            injecables.forEach((dep: string) => {

                const dependencyKey = dep.trim()
                var x = this.resolveDependencies(this.services[dependencyKey])
                dependencies.push(new this.services[dependencyKey](...x));

            })
            return dependencies
        }
        return new Array();
    }

}

export default new DI();

