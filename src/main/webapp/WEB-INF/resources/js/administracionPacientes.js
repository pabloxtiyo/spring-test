/**
 * 
 */

$( document ).ready(function() {
	$('#agregarPacienteForm').validate({
		errorElement: "span",
		rules: {
		   nombres: 
		   {
		     	required: true,
		     	maxlength: 20,
		     	minlength: 3
		   },
		   apellidos: 
		   {
		        required: true,
		        maxlength: 20,
		     	minlength: 3
		   },
		   mail: 
		   {
			    required: true,
			    email: true
		   },
		   fnacimiento:
		   {
			   required: true
		   },
		   telefono:
		   {
			   required: true
		   },
		   direccion:
		   {
			   required: true
		   }
		  },
		highlight: function(element) {
			$(element).closest('.form-group')
			.removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			element.addClass('help-inline')
			.closest('.form-group')
			.removeClass('has-error').addClass('has-success');
		}
		 
	});
	$('#modificarPacienteForm').validate({
		errorElement: "span",
		rules: {
		   nombresUp: 
		   {
		     	required: true,
		     	maxlength: 20,
		     	minlength: 3
		   },
		   apellidosUp: 
		   {
		        required: true,
		        maxlength: 20,
		     	minlength: 3
		   },
		   mailUp: 
		   {
			    required: true,
			    email: true
		   },
		   fnacimientoUp:
		   {
			   required: true
		   },
		   telefonoUp:
		   {
			   required: true
		   },
		   direccionUp:
		   {
			   required: true
		   }
		  },
		highlight: function(element) {
			$(element).closest('.form-group')
			.removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			element.addClass('help-inline')
			.closest('.form-group')
			.removeClass('has-error').addClass('has-success');
		}
		 
	});
	$(".datatables").DataTable({
		"scrollY":        "250px",
        "scrollCollapse": true,
        "aoColumns": 
        	[
        	 { "sWidth": "10%", "sClass": "center", "bSortable": false },
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
		url:"/sicmec/admin/pacientes/getPaciente/"+id,
		success:function(result)
		{
			$("#idUp").val(result.idSicPaciente);
			$("#nombresUp").val(result.fkSicPersona.nombre);
			$("#apellidosUp").val(result.fkSicPersona.apellido);
			$("#mailUp").val(result.fkSicPersona.email);
			$("#telefonoUp").val(result.telefonoPaciente);
		//	$("#sexoUp").val(result.sexoPaciente);
			$("#direccionUp").val(result.direccionPaciente);
			$("#fnacimientoUp").val(result.fxNacimiento);;
			$("#modalUpdatePaciente").modal("show");
		},
		error: function (xhr, ajaxOptions, thrownError) 
		{
			alert("unable to find server..")
	    }
	});
});

$(".onUpdateMuni").click(function(){
	var id = $(this).data("id");
	alert(id);
	
	$.ajax
	({
		type: "GET",
		url:"/sicmec/admin/pacientes/getMunicipios/"+id,
		success:function(result)
		{
			$("#municipio").val(result.getMunicipiosPorDepartamento);
		},
		error: function (xhr, ajaxOptions, thrownError) 
		{
			alert("unable to find server..")
	    }
	});
});
});