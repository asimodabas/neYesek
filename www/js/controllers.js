angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$stateParams) {
  $scope.yemekler = [
    { adi: 'Mantı',kategor:'Etli',
    malzeme:[
        {adi:'Soğan',miktar:'1 adet',kalori:'300'},
        {adi:'Patates',miktar:'2 adet',kalori:'200'},
        {adi:'Maydanoz',miktar:'1 adet',kalori:'100'},
        {adi:'Marol',miktar:'1 adet',kalori:'400'},
        {adi:'Un',miktar:'1 adet',kalori:'300'}
],img:'https://i.sozcu.com.tr/wp-content/uploads/2018/04/iecrop/evde-manti-tarifi-shutterstock_16_9_1524052425-880x495.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 0 },
    { adi: 'Adana Kebap',kategor:'Etli',img:'https://cdn.yemek.com/mncrop/940/625/uploads/2019/05/frenk-kebabi-yemekcom.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 1 },
    { adi: 'Sarma Dolma',kategor:'Etli',img:'https://im.haberturk.com/2020/03/11/ver1583933781/2610090_810x458.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 2 },
    { adi: 'Mercimek Çorbası',kategor:'Etli',img:'https://www.kevserinmutfagi.com/wp-content/uploads/2019/09/kabune3.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 3 },
    { adi: 'İzmir Köfre',kategor:'Etli',img:'https://i.sozcu.com.tr/wp-content/uploads/2018/04/iecrop/evde-manti-tarifi-shutterstock_16_9_1524052425-880x495.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 4 },
    { adi: 'Fırında Tava',kategor:'Etli',img:'https://i.sozcu.com.tr/wp-content/uploads/2018/04/iecrop/evde-manti-tarifi-shutterstock_16_9_1524052425-880x495.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 5 },
    { adi: 'Yayla Çorbası',kategor:'Etli',img:'https://i.sozcu.com.tr/wp-content/uploads/2018/04/iecrop/evde-manti-tarifi-shutterstock_16_9_1524052425-880x495.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 6 },
    { adi: 'Börek',kategor:'Etli',img:'https://i.sozcu.com.tr/wp-content/uploads/2018/04/iecrop/evde-manti-tarifi-shutterstock_16_9_1524052425-880x495.jpg',tarif:'Mantı yapımı zorluğu ile abartılır. Sizlerle paylaştığımız mantı tarifi ile evde kolayca mantı yapabilirsiniz. İşte evde mantı yapımı nasıl olur, mantı kaç kalori sorunanın yanıtları…', id: 7 }

  ];




    if($stateParams.yemekNo){
        $scope.bilgi =  $scope.yemekler[$stateParams.yemekNo];

    }


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
