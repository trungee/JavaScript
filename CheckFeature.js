export const FeatureType = Object.freeze({
  None: 0, // Binary: 0
  Feature1: 2, // Binary: 0010
  Feature2: 4, // Binary: 0100
  Feature3: 8, // Binary: 1000
  Feature4: 16, // ‭Binary: 0001 0000‬
  Feature5: 32, // Binary: ‭0010 0000‬
});

const hasPermission = function(featureType){
  const result = this.features ? (this.features & featureType) > 0 : false;
  return result;
}

hasPermission.call(userDetails, FeatureType.Feature1);
