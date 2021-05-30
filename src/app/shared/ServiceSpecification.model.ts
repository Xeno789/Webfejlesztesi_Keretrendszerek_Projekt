export interface ServiceSpecification {
    docID?:any,                                  //Update műveletehez szükséges Firestore ID.
    attachment?: AttachmentRef[],
    description: string,
    href: string,
    id: string,
    isBundle: boolean,
    lastUpdate: string,
    lifecycleStatus: string,
    name: string,
    relatedParty?: RelatedParty[],
    resourceSpecification?: ResourceSpecificationRef[],
    serviceLevelSpecification?: serviceLevelSpecification[],
    serviceSpecCharacteristic?: serviceSpecCharacteristic[],
    serviceSpecRelationship?: serviceSpecRelationship[],
    targetServiceSchema?: targetServiceSchema[],
    validForStart:string,
    validForEnd:string,
    version: string,
}

export interface AttachmentRef{
    "@referredType"?:string,
    description: string,
    href: string,
    id: string,
    url: string,
}

export interface RelatedParty{
    "@baseType"?:string,
    "@referredType"?:string,
    "@schemaLocation"?:string,
    "@type"?:string,
    href:string,
    id:string,
    name:string,
    role:string,
}
export interface ResourceSpecificationRef{
    "@referredType"?:string,
    href:string,
    id:string,
    name:string,
    version:string,
}
export interface serviceLevelSpecification{
    "@referredType"?:string,
    href:string,
    id:string,
    name:string,

}
export interface serviceSpecCharacteristic{
    "@valueSchemaLocation"?:string,
    configurable:boolean,
    description:string,
    extensible:boolean,
    isUnique:boolean,
    maxCardinality:Number,
    minCardinality:Number,
    name:string,
    regex:string,
    serviceSpecCharRelationship: ServiceSpecCharRelationship[]
    serviceSpecCharacteristicValue: ServiceSpecCharacteristicValue
    validForStart:string,
    validForEnd:string,
    valueType:string,
}
export interface serviceSpecRelationship{
    href:string,
    id:string,
    name:string,
    relationshipType:string,
    role:string,
    validForStart:string,
    validForEnd:string,

}
export interface targetServiceSchema{
    "@schemaLocation"?:string,
    "@type"?:string,
}

export interface ServiceSpecCharRelationship{
    href:string,
    id:string,
    name:string,
    relationshipType:string,
    role:string,
    validForStart:string,
    validForEnd:string,
}

export interface ServiceSpecCharacteristicValue{
    isDefault?:boolean,
    rangeInterval?: "open" | "closed" | "closedBottom" | "closedTop"
    regex?: string,
    unitOfMeasure?: string,
    validForStart:string,
    validForEnd:string,
    value?: object,
    valueFrom?: Number,
    valueTo?: Number,
    valueType?: string,
}

