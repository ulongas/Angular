/*export class Cluster {    
    clusterId: number;
    name: string;
}*/

export class Host {    
    hostId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: number;

    clusterId: number;
}

export class VirtualMachine {    
    virtualMachineId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: number;

    hostId: number;
}

export class ClusterViewModel{
    clusterId: number;
    name: string;
}

export class HostViewModel{
    hostId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: number;

    clusterId: number;
}