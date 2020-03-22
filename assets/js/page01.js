/*DATA TABLE*/
$(document).ready(function() {
	   $('.dataTable').DataTable({
       // Pengaturan Paging //
       /*Paging true atau false*/
       "paging": true,
//		"pagingType": "full_numbers",
        // ----------------------------- //
        // Show Entries //
        /*Banyaknya data yg di tampilkan*/
        // !! Dapat Tidak Dipakai karna sudah ada di language !! //
		"lengthMenu": [ [10, 15, 50, -1], ["Default", 15, 50, "All"] ],
        /*Show Entries (jumlah data per page) true or false*/
        "lengthChange": false,
        // Pencarian true atau false //
        "searching": false,
        // ----------------------------- //
        // Auto Filter //
        "ordering": false,
        // ----------------------------- //
        // Membuat Table Responsive Min layer//
//		responsive: true,
        // ----------------------------- //
        /* WIDTH SETTING */
        "columnDefs": [
//          { "width": "100px", "targets": "_all" },
//          { "width": "200px", "targets": 0 },
        ],
        // ----------------------------- //
        // Scroll //
//      "sScrollY": "100%",
//      "sScrollX": "100%",
//      "sScrollXInner": "100%",
//      "colReorder": true,
//      "bScrollCollapse": true,
//      fixedColumns: {
//          leftColumns: 0,
//          rightColumns: 0,
//       },
         // BAHASA //
		 language: {
            // Pencarian //
		    search:
               '<form action="" material="off" class="LeftCenterSearchTable">'+
               '<div class="form-inline">'+
                  
                   '<div class="input-field inputWithIcon">'+
                       '_INPUT_'+
                       '<i class="fa fa-search fa-lg fa-fw specialSearch" aria-hidden="true" style="border-left: 1px solid #aaa;height: 32px"></i>'+
                   '</div>'+
               '</div>'+
               '</form>',
		    searchPlaceholder: "Search...",
            // ----------------------------- //
            // Paging //
            paginate: {
                next: '<i class="fa fa-forward" aria-hidden="true"></i>', // or '→' &#8594 //
                previous: '<i class="fa fa-backward" aria-hidden="true"></i>' // or '←' &#8592;  //
            },
            // ----------------------------- //
            // Costum LegthMenu Sesuka hati //
            lengthMenu: 
               '<div class="form-inline LeftCenterShowDataTable">'+
                   '<span class="input-field judulInput">Show</span>'+
                   '<div class="input-field">'+
                       ' _MENU_ '+
                   '</div>'+
               '</div>',
         }, // ----------------------------- //
                
       });      
            /*=========
            ADD CLASS
            ===========*/
		    $('').addClass('');
            $('select[name="DataTables_Table_0_length"]').addClass('custom-select browser-default w-100');
            $('input[aria-controls="DataTables_Table_0"]').addClass('form-control form-control-sm');
            // Info : Show Entries (jumlah data per page) //
            $('.dataTables_length label').addClass('');
            // Info : Showing 1 to 10 of 11 entries //
            $('.dataTables_info').addClass('hide');
});
    
/*Expert Mode Form*/
/* Display change 
=================*/
$(document).ready(function() {
    $('#btn-expertmode').click(function(){
        $('.expertMode').slideToggle(1000);
        $('#btn-expertmode').hide(1000);
    });
});