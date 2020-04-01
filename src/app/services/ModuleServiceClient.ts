import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModuleById = (moduleId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/jannunzi/modules/${moduleId}`)
      .then(response => response.json())

  findAllModules = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/jannunzi/modules')
      .then(response => response.json())

  findModulesForCourse = (cid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${cid}/modules`)
      .then(response => response.json())
}
