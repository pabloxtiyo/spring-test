/**
 * 
 */

$( document ).ready(function() {
  
	$(".datatables").DataTable({
		"scrollY": "350px",
        "scrollCollapse": false,
        "aoColumns": 
        	[
        	 { "sWidth": "10%", "sClass": "center", "bSortable": false },
        	 { "sWidth": "10%" },
        	 { "sWidth": "10%" },
        	 { "sWidth": "10%" },
        	 { "sWidth": "10%" },
        	 { "sWidth": "10%" },
        	 { "sWidth": "10%" },
             { "sWidth": "10%" },
            ],
            language: {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            }   
	});
	
	$(".onUpdate").click(function(){
		var id = $(this).data("id");
		//alert(id);
		
		$.ajax
		({
			type: "GET",
			url:"/sicmec/admin/usuarios/getUser/"+id,
			success:function(result)
			{
				$("#id").val(result.idSicUsuario);
				$("#nombreUp").val(result.sicPersona.nombre);
				$("#apellidoUp").val(result.sicPersona.apellido);
				$("#mailUp").val(result.sicPersona.email);
				$("#rolUp").val(result.sicRol.idSicRol);
				$("#fxAct").val(result.fxActivacion);
				$("#fxDes").val(result.fxDesactivacion);
				
				$("#modalUpdateUsuario").modal("show");
			},
			error: function (xhr, ajaxOptions, thrownError) 
			{
				alert("unable to find server..")
		    }
		});
	});
		
});