function f() {
    var x=document.getElementById("text").value
    $.ajax({
        type: 'GET',
        url: 'https://data.gov.il/api/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&filters={"mispar_rechev":"'+x+'"}',
        dataType: 'json',
        success: function (data) {
            $('#balut').html(data.result.records[0].baalut)
            var comp=(data.result.records[0].tozeret_nm).split(" ");
            $('#tozeret_nm').html(comp[0])
            $('#kinuy_mishari').html(data.result.records[0].kinuy_mishari)
            $('#shnat_yitzur').html(data.result.records[0].shnat_yitzur)
            $('#tzeva_rechev').html(data.result.records[0].tzeva_rechev)
            $('#mivchan_acharon_dt').html(data.result.records[0].mivchan_acharon_dt.replace("T00:00:00",""))
            $('#tokef_dt').html(data.result.records[0].tokef_dt.replace("T00:00:00",""))
            $('#borncountry').html(comp[1])
        }
    });

}
