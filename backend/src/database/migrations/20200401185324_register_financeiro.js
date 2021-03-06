exports.up = function(knex) {
    return knex.schema.createTable('financeiro', function (table) {
      table.increments('idFinanceiro');
      table.string('tipo_titulo', 1).notNullable();
      table.date('data_lancamento').notNullable();
      table.date('data_emissao').notNullable();
      table.date('data_pagamento');
      table.date('data_vencimento').notNullable();
      table.float('valor').notNullable();
      table.float('juros');

      table.string('idUsuario').notNullable();
      table.string('idCliente').notNullable();

      table.foreign('idUsuario').references('idUsuario').inTable('usuario');
      table.foreign('idCliente').references('idCliente').inTable('cliente');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('financeiro');
  };