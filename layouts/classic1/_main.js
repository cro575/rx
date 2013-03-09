function showM(m)
{
	var box = getId('subMenuBox'+m);
	if(box) box.style.display = 'block';
}
function hideM(m)
{
	var box = getId('subMenuBox'+m);
	if(box) box.style.display = 'none';
}
function tabCheck(n,obj)
{
	if (n==1)
	{
		obj.parentNode.children[0].className = 'tp vline on';
		obj.parentNode.children[1].className = 'tp';
		getId('nlogLayer').style.display = 'block';
		getId('slogLayer').style.display = 'none';
	}
	else {
		obj.parentNode.children[0].className = 'tp vline';
		obj.parentNode.children[1].className = 'tp on';
		getId('nlogLayer').style.display = 'none';
		getId('slogLayer').style.display = 'block';
	}
}
function tabCheck_s(n,obj,layer)
{
	if (obj!='')
	{
		if (n==1)
		{
			obj.parentNode.children[0].className = 'tp vline on';
			obj.parentNode.children[1].className = 'tp vline';
			obj.parentNode.children[2].className = 'tp';
		}
		if (n==2)
		{
			obj.parentNode.children[0].className = 'tp vline';
			obj.parentNode.children[1].className = 'tp vline on';
			obj.parentNode.children[2].className = 'tp';
		}
		if (n==3)
		{
			obj.parentNode.children[0].className = 'tp vline';
			obj.parentNode.children[1].className = 'tp vline';
			obj.parentNode.children[2].className = 'tp on';
		}
	}
	getId(layer).innerHTML = '<div style="text-align:center;padding-top:'+(layer=='_myHOTlayer_'?150:100)+'px;"><img src="'+rooturl+'/_core/image/loading/white_big.gif" alt="" /></div>';
	setTimeout("tabCheck1Load("+n+",'"+layer+"');",100);
}
function tabCheck1Load(n,layer)
{
	var result = getHttprequest(rooturl+'/?r='+raccount+'&_themePage=ajax/'+layer+'&type='+n,'');
	getId(layer).innerHTML=getAjaxFilterString(result,'RESULT');
}
function mNext(p)
{
	if (p==0)
	{
		//alert('ó�� �������Դϴ�.');
		return false;
	}
	if (p==-1)
	{
		//alert('������ �������Դϴ�.');
		return false;
	}
	getId('_MainBox_').innerHTML = '<div style="text-align:center;padding-top:50px;"><img src="'+rooturl+'/_core/image/loading/white_big.gif" alt="" /></div>';
	var result = getHttprequest(rooturl+'/?r='+raccount+'&_themePage=ajax/_MainBox_&p='+p,'');
	getId('_MainBox_').innerHTML=getAjaxFilterString(result,'RESULT');
}
function followAction(a,fuid)
{
	var msg = a == 'friend_unfollow' ? '������ Unfollow �Ͻðڽ��ϱ�?' : '������ Follow �Ͻðڽ��ϱ�?';
	if (confirm(msg))
	{
		var result = getHttprequest(rooturl+'/?r='+raccount+'&_layoutAction='+a+'&fuid='+fuid,'');
		if (getAjaxFilterString(result,'RESULT')=='done') tabCheck_s(3,'','_myMSGlayer_');
	}
}
function layoutLogCheck(f)
{
	if (f.id.value == '')
	{
		alert('���̵� �Է��� �ּ���.');
		f.id.value='';
		f.id.focus();
		return false;
	}
	if (f.pw.value == '')
	{
		alert('�н����带 �Է��� �ּ���.');
		f.pw.value='';
		f.pw.focus();
		return false;
	}
	getIframeForAction(f);
}
function layoutRMBpw(ths)
{
	if (ths.checked == true)
	{
		if (!confirm('\n\n�н����������� ������ ��� �������ӽ� \n\n�н����带 �Է����� �����ŵ� �˴ϴ�.\n\n�׷���, ����PC�� �ƴ� ��� Ÿ���� �α����� �� �ֽ��ϴ�.     \n\nPC�� ��������� ����ϴ� ������ҿ����� üũ���� ������.\n\n������ �н����带 ����Ű�ڽ��ϱ�?\n\n'))
		{
			ths.checked = false;
		}
	}
}
function snsCheck(key,use,conn)
{
	getIframeForAction('');
	if (conn == 'connect')
	{
		if (use == 'on' || use == 'off')
		{
			if (use == 'on')
			{
				if (!confirm('������ �����Ͻðڽ��ϱ�?   '))
				{
					return false;
				}
			}
			frames.__iframe_for_action__.location.href = rooturl+'/?r='+raccount+'&m=social&a=disconnect&connect=Y&type='+key;
		}
		else {
			var w;
			var h;

			switch(key) 
			{
				case 't':
					w = 810;
					h = 550;
					break;
				case 'f':
					w = 1024;
					h = 680;
					break;
				case 'm':
					w = 900;
					h = 500;
					break;
				case 'y':
					w = 450;
					h = 450;
					break;
			}
			var url = rooturl+'/?r='+raccount+'&m=social&a=snscall_direct&type='+key;
			window.open(url,'','width='+w+'px,height='+h+'px,statusbar=no,scrollbars=no,toolbar=no');
		}
	}
	else if (conn == 'delete')
	{
		if (confirm('������ ������ �����ðڽ��ϱ�?   '))
		{
			frames.__iframe_for_action__.location.href = rooturl+'/?r='+raccount+'&m=social&a=disconnect&delete=Y&type='+key;
		}
	}
	else {
		if (confirm('������ �����Ͻðڽ��ϱ�?   '))
		{
			frames.__iframe_for_action__.location.href = rooturl+'/?r='+raccount+'&m=social&a=disconnect&type='+key;
		}
	}
}
