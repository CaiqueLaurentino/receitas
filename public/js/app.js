$(document).ready(function () {
  $('#receitasTable').DataTable({
    paging: true,
    pageLength: 10, // Limitar a 10 entradas por página
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

  // Delegar o evento para o body ou para a tabela
  $('#receitasTable tbody').on('click', '.expand-btn', function () {
    $(this).prev('.short-description').toggleClass('expanded')
    $(this).text($(this).text() === 'Ver mais' ? 'Ver menos' : 'Ver mais')
  })

  // Handle form submit
  $('#searchForm').on('submit', function () {
    var query = $('#ingredients').val()
    $('#searchQuery').text(query || '')
  })
})
