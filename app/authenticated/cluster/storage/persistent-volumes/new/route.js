import Route from '@ember/routing/route';

export default Route.extend({
  model: function(/*params, transition*/) {
    return this.get('clusterStore').createRecord({
      type: 'persistentVolume',
    });
  },
});
