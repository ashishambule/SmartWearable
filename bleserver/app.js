ble.isEnabled(
    function(){
      // Bluetooth is enabled
    },
    function(){
      // Bluetooth not yet enabled so we try to enable it
      ble.enable(
        function(){
          // bluetooth now enabled
        },
        function(err){
          alert('Cannot enable bluetooth');
        }
      );
    }
  );