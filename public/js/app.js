$(document).ready(function () {
  $('#receitasTable').DataTable({
    paging: true,
    language: {
      search: 'Pesquisar:',
      lengthMenu: 'Mostrar _MENU_ itens por página',
      info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
      infoEmpty: 'Mostrando 0 a 0 de 0 entradas',
      infoFiltered: '(filtrado de _MAX_ total de entradas)',
      paginate: {
        first: 'Primeiro',
        last: 'Último',
        next: 'Próximo',
        previous: 'Anterior',
      },
      emptyTable: 'Nenhuma receita encontrada',
    },
  })

  $('#receitasTable tbody').on('click', '.expand-btn', function () {
    var $cell = $(this).closest('td.description-cell')
    var $description = $cell.find('.short-description')
    var isExpanded = $cell.hasClass('expanded')

    $cell.toggleClass('expanded')

    $(this).text(isExpanded ? 'Ver mais' : 'Ver menos')
  })

  $('#searchForm').on('submit', function () {
    var query = $('#ingredients').val()
    $('#searchQuery').text(query || '')
  })
})
