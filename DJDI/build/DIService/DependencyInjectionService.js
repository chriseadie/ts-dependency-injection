"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DI {
    constructor() {
        this.services = {};
    }
    AddService(key, instance) {
        this.services = Object.assign(this.services, { [key]: instance });
        return this;
    }
    GetService(key) {
        const dependencies = this.resolveDependencies(this.services[key]);
        return new this.services[key](...dependencies);
    }
    resolveDependencies(dependency) {
        const di = dependency.toString().split(/constructor\s*[^\(]*\(\s*([^\)]*)\)/m);
        if (di.length > 1) {
            var injecables = di[1].split(",");
            var dependencies = new Array();
            injecables.forEach((dep) => {
                const dependencyKey = dep.trim();
                var x = this.resolveDependencies(this.services[dependencyKey]);
                dependencies.push(new this.services[dependencyKey](...x));
            });
            return dependencies;
        }
        return new Array();
    }
}
exports.default = new DI();
