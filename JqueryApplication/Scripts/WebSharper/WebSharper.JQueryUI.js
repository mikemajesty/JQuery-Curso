(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,JQueryUI,Accordion,Utils,Pagelet,Html,Client,Operators,jQuery,List,Attr,Tags,AccordionConfiguration,AccordionIconConfiguration,Autocomplete,AutocompleteConfiguration,T,Button,EventsPervasives,ButtonConfiguration,ButtonIconsConfiguration,Datepicker,DatepickerConfiguration,DatepickerShowOptionsConfiguration,Dialog,DialogConfiguration,Draggable,DraggableConfiguration,DraggableStackConfiguration,DraggablecursorAtConfiguration,Droppable,DroppableConfiguration,Menu,MenuConfiguration,Position,PositionConfiguration,Progressbar,ProgressbarConfiguration,Resizable,ResizableConfiguration,Selectable,SelectableConfiguration,Slider,SliderConfiguration,Sortable,SortableConfiguration,Spinner,$y,SpinnerConfiguration,Tabs,Math,Seq,TabsConfiguration,TabsAjaxOptionsConfiguration,TabsCookieConfiguration,TabsFxConfiguration,Tooltip,TooltipConfiguration,Pagelet1;
 Runtime.Define(Global,{
  WebSharper:{
   JQueryUI:{
    Accordion:Runtime.Class({
     OnActivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("accordionactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnBeforeActivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("accordionbeforeactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("accordioncreate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).accordion("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(els,conf)
     {
      var a,arg10,x;
      a=Accordion.New();
      arg10=List.concat(List.map(function(tupledArg)
      {
       var header,el,arg101,arg102,arg103;
       header=tupledArg[0];
       el=tupledArg[1];
       arg102=List.ofArray([Attr.Attr().NewAttr("href","#"),Tags.Tags().text(header)]);
       arg101=List.ofArray([Tags.Tags().NewTag("a",arg102)]);
       arg103=List.ofArray([el]);
       return List.ofArray([Tags.Tags().NewTag("h3",arg101),Tags.Tags().NewTag("div",arg103)]);
      },els));
      x=Tags.Tags().NewTag("div",arg10);
      Operators.OnAfterRender(function(el)
      {
       return jQuery(el.Dom).accordion(conf);
      },x);
      a.element=x;
      return a;
     },
     New2:function(els)
     {
      return Accordion.New1(els,AccordionConfiguration.New());
     }
    }),
    AccordionConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Active@"]=undefined;
      r["Animated@"]=undefined;
      r["Collapsible@"]=undefined;
      r["Disabled@"]=undefined;
      r["Event@"]=undefined;
      r["Header@"]=undefined;
      r["HeightStyle@"]=undefined;
      r["Icons@"]=undefined;
      return r;
     }
    }),
    AccordionIconConfiguration:Runtime.Class({},{
     get_Default:function()
     {
      return Runtime.New(AccordionIconConfiguration,{
       header:"ui-icon-triangle-1-e",
       headerSelected:"ui-icon-triangle-1-s"
      });
     }
    }),
    Autocomplete:Runtime.Class({
     OnChange:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompletechange",function(x,y)
       {
        (f(x))(y.item);
       });
      },_this);
     },
     OnClose:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompleteclose",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompletecreate",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnFocus:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompletefocus",function(x,y)
       {
        (f(x))(y.item);
       });
      },_this);
     },
     OnOpen:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompleteopen",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnResponse:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompleteresponse",function(x,y)
       {
        (f(x))(y.content);
       });
      },_this);
     },
     OnSearch:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompletesearch",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnSelect:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("autocompleteselect",function(x,y)
       {
        (f(x))(y.item);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).autocomplete("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var a;
      a=Autocomplete.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).autocomplete(conf);
      },el);
      a.element=el;
      return a;
     },
     New2:function(el)
     {
      return Autocomplete.New1(el,AutocompleteConfiguration.New());
     },
     New3:function()
     {
      var arg10;
      arg10=Runtime.New(T,{
       $:0
      });
      return Autocomplete.New1(Tags.Tags().NewTag("input",arg10),AutocompleteConfiguration.New());
     },
     New4:function(conf)
     {
      var arg10;
      arg10=Runtime.New(T,{
       $:0
      });
      return Autocomplete.New1(Tags.Tags().NewTag("input",arg10),conf);
     }
    }),
    AutocompleteConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["AppendTo@"]=undefined;
      r["AutoFocus@"]=undefined;
      r["Delay@"]=undefined;
      r["Disabled@"]=undefined;
      r["MinLength@"]=undefined;
      r["Position@"]=undefined;
      r["Source@"]=undefined;
      r["SourceItems@"]=undefined;
      r["SourceUrl@"]=undefined;
      r["SourceCallback@"]=undefined;
      return r;
     }
    }),
    Button:Runtime.Class({
     Disable:function()
     {
      this.isEnabled=false;
      return jQuery(this.element.Dom).button("disable");
     },
     Enable:function()
     {
      this.isEnabled=true;
      return jQuery(this.element.Dom).button("enable");
     },
     OnClick:function(f)
     {
      var arg00,_this=this,arg10;
      arg00=function()
      {
       return function(ev)
       {
        return _this.isEnabled?f(ev):null;
       };
      };
      arg10=_this.element;
      return EventsPervasives.Events().OnClick(arg00,arg10);
     },
     OnCreate:function(f)
     {
      var _this=this;
      Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("buttoncreate",function(x)
       {
        f(x);
       });
      },_this);
     },
     get_IsEnabled:function()
     {
      return this.isEnabled;
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).button("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var b;
      b=Button.New();
      b.isEnabled=true;
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).button(conf);
      },el);
      b.element=el;
      return b;
     },
     New2:function(genEl,conf)
     {
      var button,x;
      button=Button.New();
      button.isEnabled=true;
      x=genEl(null);
      Operators.OnAfterRender(function(el)
      {
       return jQuery(el.Dom).button(conf);
      },x);
      button.element=x;
      return button;
     },
     New3:function(conf)
     {
      return Button.New1(Tags.Tags().NewTag("button",Runtime.New(T,{
       $:0
      })),conf);
     },
     New4:function(label)
     {
      var returnVal;
      returnVal=ButtonConfiguration.New();
      returnVal.label=label;
      return Button.New3(returnVal);
     }
    }),
    ButtonConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Disabled@"]=undefined;
      r["Icons@"]=undefined;
      r["Label@"]=undefined;
      r["Text@"]=undefined;
      return r;
     }
    }),
    ButtonIconsConfiguration:Runtime.Class({},{
     get_Default:function()
     {
      return Runtime.New(ButtonIconsConfiguration,{
       primary:"ui-icon-gear",
       secondary:"ui-icon-triangle-1-s"
      });
     }
    }),
    Datepicker:Runtime.Class({
     OnBeforeShow:function(f)
     {
      var _this=this;
      Operators.OnBeforeRender(function()
      {
       return jQuery(_this.element.Dom).datepicker({
        beforeShow:function(x,y)
        {
         (f(jQuery(_this.element.Dom).datepicker("getDate")))(y);
        }
       });
      },_this);
     },
     OnBeforeShowDay:function(f)
     {
      var _this=this;
      Operators.OnBeforeRender(function()
      {
       return jQuery(_this.element.Dom).datepicker({
        beforeShowDay:function(x)
        {
         f(x);
        }
       });
      },_this);
     },
     OnChangeMonthYear:function(f)
     {
      var _this=this;
      Operators.OnBeforeRender(function()
      {
       return jQuery(_this.element.Dom).datepicker({
        beforeShowDay:function(x,y,z)
        {
         ((f(x))(y))(z);
        }
       });
      },_this);
     },
     OnClose:function(f)
     {
      var _this=this;
      Operators.OnBeforeRender(function()
      {
       return jQuery(_this.element.Dom).datepicker({
        onClose:function(x,y)
        {
         (f(jQuery(_this.element.Dom).datepicker("getDate")))(y);
        }
       });
      },_this);
     },
     OnSelect:function(f)
     {
      var _this=this;
      Operators.OnBeforeRender(function()
      {
       return jQuery(_this.element.Dom).datepicker({
        onSelect:function(x,y)
        {
         (f(jQuery(_this.element.Dom).datepicker("getDate")))(y);
        }
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).datepicker("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var dp;
      dp=Datepicker.New();
      dp.element=el;
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).datepicker(conf);
      },el);
      return dp;
     },
     New2:function(el)
     {
      return Datepicker.New1(el,DatepickerConfiguration.New());
     },
     New3:function(conf)
     {
      var arg10;
      arg10=Runtime.New(T,{
       $:0
      });
      return Datepicker.New1(Tags.Tags().NewTag("div",arg10),conf);
     },
     New4:function()
     {
      var arg10;
      arg10=Runtime.New(T,{
       $:0
      });
      return Datepicker.New1(Tags.Tags().NewTag("div",arg10),DatepickerConfiguration.New());
     }
    }),
    DatepickerConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["AltField@"]=undefined;
      r["AltFormat@"]=undefined;
      r["AppendText@"]=undefined;
      r["AutoSize@"]=undefined;
      r["ButtonImage@"]=undefined;
      r["ButtonImageOnly@"]=undefined;
      r["ButtonText@"]=undefined;
      r["CalculateWeek@"]=undefined;
      r["ChangeMonth@"]=undefined;
      r["ChangeYear@"]=undefined;
      r["CloseText@"]=undefined;
      r["ConstrainInput@"]=undefined;
      r["CurrentText@"]=undefined;
      r["DateFormat@"]=undefined;
      r["DayNames@"]=undefined;
      r["DayNamesMin@"]=undefined;
      r["DayNamesShort@"]=undefined;
      r["DefaultDate@"]=undefined;
      r["Duration@"]=undefined;
      r["FirstDay@"]=undefined;
      r["GotoCurrent@"]=undefined;
      r["HideIfNoPrevNext@"]=undefined;
      r["isRTL@"]=undefined;
      r["MaxDate@"]=undefined;
      r["MinDate@"]=undefined;
      r["MonthNames@"]=undefined;
      r["MonthNamesShort@"]=undefined;
      r["NavigationAsDateFormat@"]=undefined;
      r["NextText@"]=undefined;
      r["NumberOfMonths@"]=undefined;
      r["OnChangeMonthYear@"]=undefined;
      r["OnClose@"]=undefined;
      r["PrevText@"]=undefined;
      r["SelectOtherMonths@"]=undefined;
      r["ShortYearCutoff@"]=undefined;
      r["ShowAnim@"]=undefined;
      r["ShowButtonPanel@"]=undefined;
      r["ShowCurrentAtPos@"]=undefined;
      r["ShowMonthAfterYear@"]=undefined;
      r["ShowOn@"]=undefined;
      r["ShowOptions@"]=undefined;
      r["ShowOtherMonths@"]=undefined;
      r["ShowWeek@"]=undefined;
      r["StepMonths@"]=undefined;
      r["WeekHeader@"]=undefined;
      r["YearRange@"]=undefined;
      r["YearSuffix@"]=undefined;
      return r;
     }
    }),
    DatepickerShowOptionsConfiguration:Runtime.Class({},{
     get_Default:function()
     {
      return Runtime.New(DatepickerShowOptionsConfiguration,{
       showOptions:"up"
      });
     }
    }),
    Dialog:Runtime.Class({
     OnBeforeClose:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogbeforeclose",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnClose:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogclose",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogcreate",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnDrag:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogdrag",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnDragStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogdragstart",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnDragStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogdragstop",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnFocus:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogfocus",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnOpen:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogopen",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnResize:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogresize",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnResizeStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogresizestart",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnResizeStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dialogresizestop",function(x)
       {
        f(x);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).dialog("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var d;
      d=Dialog.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).dialog(conf);
      },el);
      d.element=el;
      return d;
     },
     New2:function(el)
     {
      return Dialog.New1(el,DialogConfiguration.New());
     },
     OfExisting:function(el)
     {
      var returnVal;
      returnVal=Dialog.New();
      returnVal.element=el;
      return returnVal;
     }
    }),
    DialogButton:Runtime.Class({
     set_Click:function(f)
     {
      this.click=function(e)
      {
       (f(Dialog.OfExisting({
        Dom:this,
        Render:function()
        {
         return;
        }
       })))(e);
      };
     }
    },{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Text@"]=undefined;
      return r;
     }
    }),
    DialogConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["AppendTo@"]=undefined;
      r["AutoOpen@"]=undefined;
      r["Buttons@"]=undefined;
      r["CloseOnEscape@"]=undefined;
      r["CloseText@"]=undefined;
      r["DialogClass@"]=undefined;
      r["Draggable@"]=undefined;
      r["Height@"]=undefined;
      r["Hide@"]=undefined;
      r["MaxHeight@"]=undefined;
      r["MaxWidth@"]=undefined;
      r["MinHeight@"]=undefined;
      r["MinWidth@"]=undefined;
      r["Modal@"]=undefined;
      r["Position@"]=undefined;
      r["Resizable@"]=undefined;
      r["Show@"]=undefined;
      r["Title@"]=undefined;
      r["Width@"]=undefined;
      return r;
     }
    }),
    Draggable:Runtime.Class({
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dragcreate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnDrag:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("drag",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dragstart",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dragstop",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).draggable("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var a;
      a=Draggable.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).draggable(conf);
      },el);
      a.element=el;
      return a;
     },
     New2:function(el)
     {
      return Draggable.New1(el,DraggableConfiguration.New());
     }
    }),
    DraggableConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["AddClasses@"]=undefined;
      r["AppendTo@"]=undefined;
      r["Axis@"]=undefined;
      r["Cancel@"]=undefined;
      r["ConnectToSortable@"]=undefined;
      r["Containment@"]=undefined;
      r["Cursor@"]=undefined;
      r["CursorAt@"]=undefined;
      r["Delay@"]=undefined;
      r["Disabled@"]=undefined;
      r["Distance@"]=undefined;
      r["Grid@"]=undefined;
      r["Handle@"]=undefined;
      r["Helper@"]=undefined;
      r["IframeFix@"]=undefined;
      r["Opacity@"]=undefined;
      r["RefreshPositions@"]=undefined;
      r["Revert@"]=undefined;
      r["RevertDuration@"]=undefined;
      r["Scope@"]=undefined;
      r["Scroll@"]=undefined;
      r["ScrollSensitivity@"]=undefined;
      r["ScrollSpeed@"]=undefined;
      r["Snap@"]=undefined;
      r["SnapMode@"]=undefined;
      r["SnapTolerance@"]=undefined;
      r["Stack@"]=undefined;
      r["ZIndex@"]=undefined;
      return r;
     }
    }),
    DraggableStackConfiguration:Runtime.Class({},{
     get_Default:function()
     {
      return Runtime.New(DraggableStackConfiguration,{
       group:"prouducts",
       min:50
      });
     }
    }),
    DraggablecursorAtConfiguration:Runtime.Class({},{
     get_Default:function()
     {
      return Runtime.New(DraggablecursorAtConfiguration,{
       top:1,
       left:1
      });
     }
    }),
    Droppable:Runtime.Class({
     OnActivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dropactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dropcreate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnDeactivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dropdeactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnDrop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("drop",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnOut:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dropout",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnOver:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("dropover",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).droppable("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var a;
      a=Droppable.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).droppable(conf);
      },el);
      a.element=el;
      return a;
     },
     New2:function(el)
     {
      return Droppable.New1(el,DroppableConfiguration.New());
     }
    }),
    DroppableConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Accept@"]=undefined;
      r["ActiveClass@"]=undefined;
      r["AddClasses@"]=undefined;
      r["Disabled@"]=undefined;
      r["Greedy@"]=undefined;
      r["HoverClass@"]=undefined;
      r["Scope@"]=undefined;
      r["Tolerance@"]=undefined;
      return r;
     }
    }),
    Menu:Runtime.Class({
     OnBlur:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("menublur",function(x,y)
       {
        (f(x))(y.item);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("menucreate",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnFocus:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("menufocus",function(x,y)
       {
        (f(x))(y.item);
       });
      },_this);
     },
     OnSelect:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("menuselect",function(x,y)
       {
        (f(x))(y.item);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).menu("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var d;
      d=Menu.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).menu(conf);
      },el);
      d.element=el;
      return d;
     },
     New2:function(el)
     {
      return Menu.New1(el,MenuConfiguration.New());
     }
    }),
    MenuConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Disabled@"]=undefined;
      r["Icons@"]=undefined;
      r["Menus@"]=undefined;
      r["Position@"]=undefined;
      r["Role@"]=undefined;
      return r;
     }
    }),
    Position:Runtime.Class({},{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var a;
      a=Position.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).position(conf);
      },el);
      a.element=el;
      return a;
     },
     New2:function(el)
     {
      return Position.New1(el,PositionConfiguration.New());
     }
    }),
    PositionConfiguration:Runtime.Class({
     get_Of:function()
     {
      return this.ofTarget;
     },
     get_Offset:function()
     {
      return this.offsetTuple;
     },
     set_Of:function(t)
     {
      this.ofTarget=t;
      this.of=t.get_Get();
      return;
     },
     set_Offset:function(pos)
     {
      var y;
      this.offsetTuple=pos;
      y=pos[1];
      this.offset=Global.String(pos[0])+" "+Global.String(y);
      return;
     }
    },{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["My@"]=undefined;
      r["At@"]=undefined;
      r["Collision@"]=undefined;
      r["By@"]=undefined;
      r["Bgiframe@"]=undefined;
      return r;
     }
    }),
    Progressbar:Runtime.Class({
     OnChange:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("progressbarchange",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnComplete:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("progressbarcomplete",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("progressbarcreate",function(x)
       {
        f(x);
       });
      },_this);
     },
     get_Value:function()
     {
      return jQuery(this.element.Dom).progressbar("value");
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).progressbar("widget");
     },
     set_Value:function(v)
     {
      return jQuery(this.element.Dom).progressbar("value",v);
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var pb;
      pb=Progressbar.New();
      pb.element=el;
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).progressbar(conf);
      },el);
      return pb;
     },
     New2:function(el)
     {
      return Progressbar.New1(el,ProgressbarConfiguration.New());
     },
     New3:function(conf)
     {
      var arg10;
      arg10=Runtime.New(T,{
       $:0
      });
      return Progressbar.New1(Tags.Tags().NewTag("div",arg10),conf);
     },
     New4:function()
     {
      var arg10;
      arg10=Runtime.New(T,{
       $:0
      });
      return Progressbar.New1(Tags.Tags().NewTag("div",arg10),ProgressbarConfiguration.New());
     }
    }),
    ProgressbarConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Disabled@"]=undefined;
      r["Value@"]=undefined;
      r["Max@"]=undefined;
      return r;
     }
    }),
    Resizable:Runtime.Class({
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("resizecreate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnResize:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("resize",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("resizestart",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("resizestop",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).resizable("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var a;
      a=Resizable.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).resizable(conf);
      },el);
      a.element=el;
      return a;
     },
     New2:function(el)
     {
      return Resizable.New1(el,ResizableConfiguration.New());
     }
    }),
    ResizableConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["AlsoResize@"]=undefined;
      r["Animate@"]=undefined;
      r["AnimateDuration@"]=undefined;
      r["AnimateEasing@"]=undefined;
      r["AspectRatio@"]=undefined;
      r["AutoHide@"]=undefined;
      r["Cancel@"]=undefined;
      r["Containment@"]=undefined;
      r["Delay@"]=undefined;
      r["Disabled@"]=undefined;
      r["Distance@"]=undefined;
      r["Ghost@"]=undefined;
      r["Grid@"]=undefined;
      r["Handles@"]=undefined;
      r["Helper@"]=undefined;
      r["MaxHeight@"]=undefined;
      r["MaxWidth@"]=undefined;
      r["MinHeight@"]=undefined;
      r["MinWidth@"]=undefined;
      return r;
     }
    }),
    Selectable:Runtime.Class({
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).selectable({
        create:function(x,y)
        {
         (f(x))(y.create);
        }
       });
      },_this);
     },
     OnSelected:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).selectable({
        selected:function(x,y)
        {
         (f(x))(y.selected);
        }
       });
      },_this);
     },
     OnSelecting:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).selectable({
        selecting:function(x,y)
        {
         (f(x))(y.selecting);
        }
       });
      },_this);
     },
     OnStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).selectable({
        start:function(x)
        {
         f(x);
        }
       });
      },_this);
     },
     OnStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).selectable({
        stop:function(x)
        {
         f(x);
        }
       });
      },_this);
     },
     OnUnselected:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).selectable({
        unselected:function(x,y)
        {
         (f(x))(y.unselected);
        }
       });
      },_this);
     },
     OnUnselecting:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).selectable({
        unselecting:function(x,y)
        {
         (f(x))(y.unselecting);
        }
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).selectable("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var a;
      a=Selectable.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).selectable(conf);
      },el);
      a.element=el;
      return a;
     },
     New2:function(el)
     {
      return Selectable.New1(el,SelectableConfiguration.New());
     }
    }),
    SelectableConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["AppendTo@"]=undefined;
      r["AutoRefresh@"]=undefined;
      r["Cancel@"]=undefined;
      r["Delay@"]=undefined;
      r["Disabled@"]=undefined;
      r["Distance@"]=undefined;
      r["Filter@"]=undefined;
      r["Tolerance@"]=undefined;
      return r;
     }
    }),
    Slider:Runtime.Class({
     OnChange:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("slidechange",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnSlide:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("slide",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("slidestart",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("slidestop",function(x)
       {
        f(x);
       });
      },_this);
     },
     get_Value:function()
     {
      return jQuery(this.element.Dom).slider("value");
     },
     get_Values:function()
     {
      return jQuery(this.element.Dom).slider("values");
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).slider("widget");
     },
     set_Value:function(v)
     {
      return jQuery(this.element.Dom).slider("value",v);
     },
     set_Values:function(v)
     {
      return jQuery(this.element.Dom).slider("values",v);
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(conf)
     {
      var s,arg10,x;
      s=Slider.New();
      arg10=Runtime.New(T,{
       $:0
      });
      x=Tags.Tags().NewTag("div",arg10);
      Operators.OnAfterRender(function(el)
      {
       return jQuery(el.Dom).slider(conf);
      },x);
      s.element=x;
      return s;
     },
     New2:function()
     {
      return Slider.New1(SliderConfiguration.New());
     }
    }),
    SliderConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Animate@"]=undefined;
      r["Disabled@"]=undefined;
      r["Max@"]=undefined;
      r["Min@"]=undefined;
      r["Orientation@"]=undefined;
      r["Range@"]=undefined;
      r["Step@"]=undefined;
      r["Value@"]=undefined;
      r["Values@"]=undefined;
      return r;
     }
    }),
    Sortable:Runtime.Class({
     OnActivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnBeforeStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortbeforestop",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnChange:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortchange",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortcreate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnDeactivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortdeactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnOut:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortout",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnOver:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortover",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnReceive:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortreceive",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnRemove:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortremove",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnSort:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sort",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortstart",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortstop",function(event,ui)
       {
        (f(event))(ui);
       });
      },_this);
     },
     OnUpdate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("sortupdate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     get_Widget:function()
     {
      return this.sortable("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(el,conf)
     {
      var s;
      s=Sortable.New();
      Operators.OnAfterRender(function(el1)
      {
       return jQuery(el1.Dom).sortable(conf);
      },el);
      s.element=el;
      return s;
     },
     New2:function(el)
     {
      return Sortable.New1(el,SortableConfiguration.New());
     }
    }),
    SortableConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["AppendTo@"]=undefined;
      r["Axis@"]=undefined;
      r["Cancel@"]=undefined;
      r["ConnectWith@"]=undefined;
      r["Containment@"]=undefined;
      r["Cursor@"]=undefined;
      r["CursorAt@"]=undefined;
      r["Delay@"]=undefined;
      r["Disabled@"]=undefined;
      r["Distance@"]=undefined;
      r["DropOnEmpty@"]=undefined;
      r["ForceHelperSize@"]=undefined;
      r["ForcePlaceholderSize@"]=undefined;
      r["Grid@"]=undefined;
      r["Handle@"]=undefined;
      r["Helper@"]=undefined;
      r["Items@"]=undefined;
      r["Opacity@"]=undefined;
      r["Placeholder@"]=undefined;
      r["Revert@"]=undefined;
      r["Scroll@"]=undefined;
      r["ScrollSensitivity@"]=undefined;
      r["ScrollSpeed@"]=undefined;
      r["Tolerance@"]=undefined;
      r["ZIndex@"]=undefined;
      return r;
     }
    }),
    Spinner:Runtime.Class({
     OnChange:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("spinnerchange",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnSpin:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("spinnerspin",function(x)
       {
        (f(x))($y.value);
       });
      },_this);
     },
     OnStart:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("spinnerstart",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnStop:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("spinnerstop",function(x)
       {
        f(x);
       });
      },_this);
     },
     get_Value:function()
     {
      return jQuery(this.element.Dom).spinner("value");
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).spinner("widget");
     },
     set_Value:function(v)
     {
      return jQuery(this.element.Dom).spinner("value",v);
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(conf)
     {
      var s,arg10,x;
      s=Spinner.New();
      arg10=Runtime.New(T,{
       $:0
      });
      x=Tags.Tags().NewTag("div",arg10);
      Operators.OnAfterRender(function(el)
      {
       return jQuery(el.Dom).spinner(conf);
      },x);
      s.element=x;
      return s;
     },
     New2:function()
     {
      return Spinner.New1(SpinnerConfiguration.New());
     }
    }),
    SpinnerConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Culture@"]=undefined;
      r["Disabled@"]=undefined;
      r["Icons@"]=undefined;
      r["Incremental@"]=undefined;
      r["Max@"]=undefined;
      r["Min@"]=undefined;
      r["NumberFormat@"]=undefined;
      r["Page@"]=undefined;
      r["Step@"]=undefined;
      return r;
     }
    }),
    Tabs:Runtime.Class({
     Add:function(el,label,ix)
     {
      var id,x,arg10,arg101,tab,panel,arg102;
      id="id"+Math.round(Math.random()*100000000);
      arg101="#"+id;
      arg10=List.ofArray([Attr.Attr().NewAttr("href",arg101),Tags.Tags().text(label)]);
      x=List.ofArray([Tags.Tags().NewTag("a",arg10)]);
      tab=Tags.Tags().NewTag("li",x);
      arg102=List.ofArray([Attr.Attr().NewAttr("id",id)]);
      panel=Operators.add(Tags.Tags().NewTag("div",arg102),List.ofArray([el]));
      jQuery(this.tabContainer.Dom).children().eq(ix).before(tab.Dom);
      jQuery(this.panelContainer.Dom).children().eq(ix).after(panel.Dom);
      tab.Render();
      panel.Render();
      return jQuery(this.element.Dom).tabs("refresh");
     },
     Add1:function(el,label)
     {
      var id,arg10,arg101,arg102,tab,panel,arg103;
      id="id"+Math.round(Math.random()*100000000);
      arg102="#"+id;
      arg101=List.ofArray([Attr.Attr().NewAttr("href",arg102),Tags.Tags().text(label)]);
      arg10=List.ofArray([Tags.Tags().NewTag("a",arg101)]);
      tab=Tags.Tags().NewTag("li",arg10);
      arg103=List.ofArray([Attr.Attr().NewAttr("id",id)]);
      panel=Operators.add(Tags.Tags().NewTag("div",arg103),List.ofArray([el]));
      this.tabContainer.AppendI(tab);
      this.panelContainer.AppendI(panel);
      return jQuery(this.element.Dom).tabs("refresh");
     },
     OnActivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("tabsactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnBeforeActivate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("tabsbeforeactivate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnBeforeLoad:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("tabsbeforeload",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnCreate:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("tabscreate",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     OnLoad:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("tabsload",function(x,y)
       {
        (f(x))(y);
       });
      },_this);
     },
     Remove:function(ix)
     {
      jQuery(this.tabContainer.Dom).children().eq(ix).remove();
      jQuery(this.panelContainer.Dom).children().eq(ix).remove();
      return jQuery(this.element.Dom).tabs("refresh");
     },
     get_Length:function()
     {
      return jQuery(this.tabContainer.Dom).children().size();
     },
     get_TabContainer:function()
     {
      return this.tabContainer;
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).tabs("widget");
     }
    },{
     New:function(tabContainer,panelContainer)
     {
      var r;
      r=Runtime.New(this,Pagelet.New());
      r.tabContainer=tabContainer;
      r.panelContainer=panelContainer;
      return r;
     },
     New1:function(els,conf)
     {
      var itemPanels,arg104,tabs,patternInput,arg105,panelContainer,tabs1;
      itemPanels=List.map(function(tupledArg)
      {
       var label,panel,id,arg10,arg101,arg102,arg103;
       label=tupledArg[0];
       panel=tupledArg[1];
       id="id"+Math.round(Math.random()*100000000);
       arg102="#"+id;
       arg101=List.ofArray([Attr.Attr().NewAttr("href",arg102),Tags.Tags().text(label)]);
       arg10=List.ofArray([Tags.Tags().NewTag("a",arg101)]);
       arg103=List.ofArray([Attr.Attr().NewAttr("id",id)]);
       return[Tags.Tags().NewTag("li",arg10),Operators.add(Tags.Tags().NewTag("div",arg103),List.ofArray([panel]))];
      },els);
      arg104=Seq.map(function(tuple)
      {
       return tuple[0];
      },itemPanels);
      tabs=Tags.Tags().NewTag("ul",arg104);
      arg105=Runtime.New(T,{
       $:1,
       $0:tabs,
       $1:List.map(function(tuple)
       {
        return tuple[1];
       },itemPanels)
      });
      patternInput=[Tags.Tags().NewTag("div",arg105),tabs];
      panelContainer=patternInput[0];
      tabs1=Tabs.New(patternInput[1],panelContainer);
      Operators.OnAfterRender(function(el)
      {
       return jQuery(el.Dom).tabs(conf);
      },panelContainer);
      tabs1.element=panelContainer;
      return tabs1;
     },
     New2:function(els)
     {
      return Tabs.New1(els,TabsConfiguration.New());
     }
    }),
    TabsAjaxOptionsConfiguration:Runtime.Class({},{
     get_Default:function()
     {
      return Runtime.New(TabsAjaxOptionsConfiguration,{
       ajaxOptions:false
      });
     }
    }),
    TabsConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Active@"]=undefined;
      r["Collapsible@"]=undefined;
      r["Disabled@"]=undefined;
      r["Event@"]=undefined;
      r["HeightStyle@"]=undefined;
      r["Hide@"]=undefined;
      r["Show@"]=undefined;
      return r;
     }
    }),
    TabsCookieConfiguration:Runtime.Class({},{
     get_Default:function()
     {
      return Runtime.New(TabsCookieConfiguration,{
       cookie:30
      });
     }
    }),
    TabsFxConfiguration:Runtime.Class({},{
     get_Dafault:function()
     {
      return Runtime.New(TabsFxConfiguration,{
       fx:"toggle"
      });
     }
    }),
    Target:Runtime.Class({
     get_Get:function()
     {
      return this.$==1?this.$0:this.$==2?"#"+this.$0:this.$0;
     }
    }),
    Tooltip:Runtime.Class({
     OnClose:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("tooltipclose",function(x)
       {
        f(x);
       });
      },_this);
     },
     OnOpen:function(f)
     {
      var _this=this;
      return Operators.OnAfterRender(function()
      {
       return jQuery(_this.element.Dom).bind("tooltipopen",function(x)
       {
        f(x);
       });
      },_this);
     },
     get_Widget:function()
     {
      return jQuery(this.element.Dom).tooltip("widget");
     }
    },{
     New:function()
     {
      return Runtime.New(this,Pagelet.New());
     },
     New1:function(conf)
     {
      var s,arg10,x;
      s=Tooltip.New();
      arg10=Runtime.New(T,{
       $:0
      });
      x=Tags.Tags().NewTag("div",arg10);
      Operators.OnAfterRender(function(el)
      {
       return jQuery(el.Dom).tooltip(conf);
      },x);
      s.element=x;
      return s;
     },
     New2:function()
     {
      return Tooltip.New1(TooltipConfiguration.New());
     }
    }),
    TooltipConfiguration:Runtime.Class({},{
     New:function()
     {
      var r;
      r=Runtime.New(this,{});
      r["Content@"]=undefined;
      r["ContentFunction@"]=undefined;
      r["Disabled@"]=undefined;
      r["Hide@"]=undefined;
      r["Items@"]=undefined;
      r["Position@"]=undefined;
      r["Show@"]=undefined;
      r["TooltipClass@"]=undefined;
      r["Track@"]=undefined;
      return r;
     }
    }),
    Utils:{
     Pagelet:Runtime.Class({
      Render:function()
      {
       return this.element.Render();
      },
      get_Body:function()
      {
       return this.element.get_Body();
      }
     },{
      New:function()
      {
       return Runtime.New(this,Pagelet1.New());
      }
     })
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  JQueryUI=Runtime.Safe(Global.WebSharper.JQueryUI);
  Accordion=Runtime.Safe(JQueryUI.Accordion);
  Utils=Runtime.Safe(JQueryUI.Utils);
  Pagelet=Runtime.Safe(Utils.Pagelet);
  Html=Runtime.Safe(Global.WebSharper.Html);
  Client=Runtime.Safe(Html.Client);
  Operators=Runtime.Safe(Client.Operators);
  jQuery=Runtime.Safe(Global.jQuery);
  List=Runtime.Safe(Global.WebSharper.List);
  Attr=Runtime.Safe(Client.Attr);
  Tags=Runtime.Safe(Client.Tags);
  AccordionConfiguration=Runtime.Safe(JQueryUI.AccordionConfiguration);
  AccordionIconConfiguration=Runtime.Safe(JQueryUI.AccordionIconConfiguration);
  Autocomplete=Runtime.Safe(JQueryUI.Autocomplete);
  AutocompleteConfiguration=Runtime.Safe(JQueryUI.AutocompleteConfiguration);
  T=Runtime.Safe(List.T);
  Button=Runtime.Safe(JQueryUI.Button);
  EventsPervasives=Runtime.Safe(Client.EventsPervasives);
  ButtonConfiguration=Runtime.Safe(JQueryUI.ButtonConfiguration);
  ButtonIconsConfiguration=Runtime.Safe(JQueryUI.ButtonIconsConfiguration);
  Datepicker=Runtime.Safe(JQueryUI.Datepicker);
  DatepickerConfiguration=Runtime.Safe(JQueryUI.DatepickerConfiguration);
  DatepickerShowOptionsConfiguration=Runtime.Safe(JQueryUI.DatepickerShowOptionsConfiguration);
  Dialog=Runtime.Safe(JQueryUI.Dialog);
  DialogConfiguration=Runtime.Safe(JQueryUI.DialogConfiguration);
  Draggable=Runtime.Safe(JQueryUI.Draggable);
  DraggableConfiguration=Runtime.Safe(JQueryUI.DraggableConfiguration);
  DraggableStackConfiguration=Runtime.Safe(JQueryUI.DraggableStackConfiguration);
  DraggablecursorAtConfiguration=Runtime.Safe(JQueryUI.DraggablecursorAtConfiguration);
  Droppable=Runtime.Safe(JQueryUI.Droppable);
  DroppableConfiguration=Runtime.Safe(JQueryUI.DroppableConfiguration);
  Menu=Runtime.Safe(JQueryUI.Menu);
  MenuConfiguration=Runtime.Safe(JQueryUI.MenuConfiguration);
  Position=Runtime.Safe(JQueryUI.Position);
  PositionConfiguration=Runtime.Safe(JQueryUI.PositionConfiguration);
  Progressbar=Runtime.Safe(JQueryUI.Progressbar);
  ProgressbarConfiguration=Runtime.Safe(JQueryUI.ProgressbarConfiguration);
  Resizable=Runtime.Safe(JQueryUI.Resizable);
  ResizableConfiguration=Runtime.Safe(JQueryUI.ResizableConfiguration);
  Selectable=Runtime.Safe(JQueryUI.Selectable);
  SelectableConfiguration=Runtime.Safe(JQueryUI.SelectableConfiguration);
  Slider=Runtime.Safe(JQueryUI.Slider);
  SliderConfiguration=Runtime.Safe(JQueryUI.SliderConfiguration);
  Sortable=Runtime.Safe(JQueryUI.Sortable);
  SortableConfiguration=Runtime.Safe(JQueryUI.SortableConfiguration);
  Spinner=Runtime.Safe(JQueryUI.Spinner);
  $y=Runtime.Safe(Global.$y);
  SpinnerConfiguration=Runtime.Safe(JQueryUI.SpinnerConfiguration);
  Tabs=Runtime.Safe(JQueryUI.Tabs);
  Math=Runtime.Safe(Global.Math);
  Seq=Runtime.Safe(Global.WebSharper.Seq);
  TabsConfiguration=Runtime.Safe(JQueryUI.TabsConfiguration);
  TabsAjaxOptionsConfiguration=Runtime.Safe(JQueryUI.TabsAjaxOptionsConfiguration);
  TabsCookieConfiguration=Runtime.Safe(JQueryUI.TabsCookieConfiguration);
  TabsFxConfiguration=Runtime.Safe(JQueryUI.TabsFxConfiguration);
  Tooltip=Runtime.Safe(JQueryUI.Tooltip);
  TooltipConfiguration=Runtime.Safe(JQueryUI.TooltipConfiguration);
  return Pagelet1=Runtime.Safe(Client.Pagelet);
 });
 Runtime.OnLoad(function()
 {
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Accordion,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Autocomplete,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Button,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Datepicker,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Dialog,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Draggable,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Droppable,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Menu,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Position,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Progressbar,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Resizable,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Selectable,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Slider,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Sortable,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Spinner,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Tabs,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  Runtime.Inherit(Tooltip,Pagelet);
  Runtime.Inherit(Pagelet,Pagelet1);
  return;
 });
}());
