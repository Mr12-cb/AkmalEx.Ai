cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBar("AkmalEx AI", "menu", "search,more_vert")
        apb.SetOnMenuTouch(OnMenuTouch)
        apb.SetOnControlTouch(OnControlTouch)


        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")
            pageLay = MUI.CreateLayout("Linear")
            pageLay.SetSize(1, 1.5)
            pageLay.SetPadding(0, 0, apbHeight, 0)
                var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
                pageLay.AddChild( MUI.CreateTextParagraph(txt) )
            scr.AddChild(pageLay)

        lay.AddChild(scr)
        web = app.CreateWebView( 1, 1, "Progress" );
                                                                                                                     	web.LoadUrl( "https://chat.forefront.ai/" )
 //    web.SetOnProgress( web_OnProgess );
     lay.AddChild( web );
        lay.AddChild(apb)

    app.AddLayout(lay)
}

function OnMenuTouch()
{
    app.ShowPopup("You click the menu. Might as well display a drawer.")
}

function OnControlTouch(text, index)
{
    app.ShowPopup("You click " + text + ": Control index = "+index)
}