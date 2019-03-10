         window.onload = function ()
        {
        	$("#teste").val('Entrando');
        	var dadosIdades=[12, 11, 9, 6, 3]

			var idadevilourenco = 12;
			var idadembrena = 11;
			var idadefausto = 9;
			var idadegenes = 6;
			var idadeandre = 3;

            var meuGraficoIdades = new RGraph.Line('meuCanvasGraficoIdades', dadosIdades);
            meuGraficoIdades.Set('chart.title', 'Tensão por hora');
            meuGraficoIdades.Set('chart.title.vpos', 0.6);
            meuGraficoIdades.Set('chart.labels', ['@vilourenco', '@monteirobrena', '@g0nc1n', '@webgenes', '@andredmolin']);
            meuGraficoIdades.Set('chart.tooltips', ['Pegar do bando data e hora ' + idadevilourenco + ' V', '@monteirobrena tem ' + idadembrena + ' anos', '@g0nc1n tem ' + idadefausto + ' anos', '@webgenes tem ' + idadegenes + ' anos', '@andredmolin tem ' + idadeandre + ' anos']);
            meuGraficoIdades.Set('chart.text.angle', 45);
            meuGraficoIdades.Set('chart.gutter', 35);
            meuGraficoIdades.Set('chart.shadow', true);
            meuGraficoIdades.Set('chart.shadow.blur', 5);
            meuGraficoIdades.Set('chart.shadow.color', '#aaa');
            meuGraficoIdades.Set('chart.shadow.offsety', -3);
            meuGraficoIdades.Set('chart.colors', ['#00CED1']);
            meuGraficoIdades.Set('chart.key.position', 'gutter');
            meuGraficoIdades.Set('chart.text.size', 10);
            meuGraficoIdades.Set('chart.text.font', 'Georgia');
            meuGraficoIdades.Set('chart.text.angle', 0);
            meuGraficoIdades.Set('chart.grouping', 'stacked');
            meuGraficoIdades.Set('chart.strokecolor', 'rgba(0,0,0,0)');
            meuGraficoIdades.Draw();      
        }
