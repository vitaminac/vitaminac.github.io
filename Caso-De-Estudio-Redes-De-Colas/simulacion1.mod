{10.1.0.2641}
{Enterprise Dynamics startup information}

if(StartingED, SoftStartED([]));


{Model information}

AddLayer([Main], 1, 1, 0);


{Load required atoms}

int011;
int035([Product], pDir([Atoms\BASIC MODELING\Product.atm]));
int035([Queue], pDir([Atoms\BASIC MODELING\Queue.atm]));
int035([Sink], pDir([Atoms\BASIC MODELING\Sink.atm]));
int035([Source], pDir([Atoms\BASIC MODELING\Source.atm]));
int035([MultiService], pDir([Atoms\PROCESSES\MultiService.atm]));
int012;


{Atom: Check-in}

sets;
AtomByName([Source], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Source'. Inheriting from BaseClass.]));
CreateAtom(a, s, [Check-in], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetExprAtt(2, [negexp(60*60/5000)]);
SetExprAtt(3, [{.0|10. Do Nothing.}0]);
SetExprAtt(4, [4DS[Label([inspeccion], i) := Time]4DS]);
SetExprAtt(5, [0]);
SetExprAtt(6, [{.-1|1. Unlimited.}-1]);
SetAtt(7, 4);
int023([Check-in], 7168771, 240);
Set(Icon(a), 
	RegisterIcon(pDir([Media\Images\atoms\source.bmp]), [source]));
AddModel3D(
	RegisterModel3D(Model3DDir([source.wrl]), [source.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
AddModel3D(
	RegisterModel3D(Model3DDir([source_Resized.wrl]), [Source_Resized.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Source.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 1, 1, 255);
int001(1);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(5, 7, 0);
SetSize(5, 2, 2);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(2);
int018;


{Atom: Cola de N1}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Cola de N1], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Cola de N1], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(2, 1);
SetChannelRanges(1, 255, 1, 255);
int001(2);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, true, 0, 0, [], []);
SetLoc(12, 7, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: N1}

sets;
AtomByName([MultiService], Main);
if(not(AtomExists), Error([Cannot find mother atom 'MultiService'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [N1], 1, false);
SetAtt(1, 8);
SetExprAtt(2, [negexp(4)]);
SetAtt(3, 0);
SetAtt(4, 0);
SetExprAtt(5, [{.~1|~if(Bernoulli(1, 3, 0) = 3, 3, Bernoulli(15, 1, 2))~.}if(Bernoulli(1, 3, 0) = 3, 3, Bernoulli(15, 1, 2))]);
SetExprAtt(6, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetAtt(9, 0);
SetAtt(10, 1);
SetAtt(11, 0);
SetTextAtt(12, [1]);
SetExprAtt(13, [{.ic(c)|1. Batch by input channel..}ic(c)]);
int023([N1], 0, 232);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\server.bmp]), [server]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\MultiServer.ico]));
Set(DdbRec, [>intervaltime:172799.248041768.>entertime:172799.248041743.]);
SetChannels(1, 3);
SetChannelRanges(1, 255, 1, 255);
int001(3);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, false, 0, 0, [], []);
int013(3, 0, true, false, 0, 0, [], []);
SetLoc(19, 6, 0);
SetSize(8, 5, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetTable(1, 5);
int015(0, 64, [0
1
]);
int015(1, 107, [`Batch indicator`
`IC_001`
]);
int015(2, 105, [`Incoming product`
1
]);
int015(3, 114, [`Outgoing product`
1
]);
int015(4, 128, [`Currently gathered`
0
]);
int015(5, 64, [`PointOfFirstProduct`
0
]);
SetStatus(1);
int018;


{Atom: Cola de N2}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Cola de N2], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Cola de N2], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(2, 1);
SetChannelRanges(1, 255, 1, 255);
int001(4);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, true, 0, 0, [], []);
SetLoc(29, 7, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: Maleta}

sets;
AtomByName([Product], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Product'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Maleta], 1, false);
SetAtt(1, 11);
SetAtt(2, 1);
int023([Maleta], 12615680, 73809);
Set(Icon(a), 
	RegisterIcon(IconsDir([Png\products\product.png]), [product], 1, 1, 16777215, 255, 255, false, 0));
AddModel3D(
	RegisterModel3D(Model3DDir([box-closed.wrl]), [box-closed.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
AddModel3D(
	RegisterModel3D(Model3DDir([box-opened.wrl]), [box-opened.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
AddModel3D(
	RegisterModel3D(Model3DDir([pallet-wood.wrl]), [pallet-wood.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
AddModel3D(
	RegisterModel3D(Model3DDir([pallet-plastic.wrl]), [pallet-plastic.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
AddModel3D(
	RegisterModel3D(Model3DDir([oildrum.wrl]), [oildrum.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
AddModel3D(
	RegisterModel3D(Model3DDir([crate.wrl]), [crate.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Product.ico]));
int001(6);
SetLoc(2, 7, 0);
SetSize(1, 1, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(0);
int018;


{Atom: Repartidor a diferentes hipódromos}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Repartidor a diferentes hipódromos], 1, false);
SetExprAtt(1, [{.IndexMax(NrOC(c), OCReady(Count,c)*Random(100000))|4. A random open channel: choose a random channel from all the open output channels..}IndexMax(NrOC(c), OCReady(Count,c)*Random(100000))]);
SetAtt(2, 999999999);
SetExprAtt(3, [4DS[Label([inspeccion], i) := Time - Label([inspeccion], i)]4DS]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Repartidor a diferentes hipódromos], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
Set(DdbRec, [>t-rr:2.]);
SetChannels(3, 4);
SetChannelRanges(1, 255, 1, 255);
int001(7);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, false, 0, 0, [], []);
int013(3, 0, true, false, 0, 0, [], []);
int013(4, 0, true, false, 0, 0, [], []);
SetLoc(11, -9, 0);
SetSize(11, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: Cola de N3}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Cola de N3], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Cola de N3], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(2, 1);
SetChannelRanges(1, 255, 1, 255);
int001(9);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, true, 0, 0, [], []);
SetLoc(46, 7, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: N2}

sets;
AtomByName([MultiService], Main);
if(not(AtomExists), Error([Cannot find mother atom 'MultiService'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [N2], 1, false);
SetAtt(1, 6);
SetExprAtt(2, [negexp(60/3)]);
SetAtt(3, 0);
SetAtt(4, 0);
SetExprAtt(5, [{.~1|~if(Bernoulli(1, 3, 0) = 3, 3, Bernoulli(20, 1, 2))~.}if(Bernoulli(1, 3, 0) = 3, 3, Bernoulli(20, 1, 2))]);
SetExprAtt(6, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetAtt(9, 0);
SetAtt(10, 1);
SetAtt(11, 0);
SetTextAtt(12, [1]);
SetExprAtt(13, [{.ic(c)|1. Batch by input channel..}ic(c)]);
int023([N2], 0, 232);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\server.bmp]), [server]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\MultiServer.ico]));
SetChannels(1, 3);
SetChannelRanges(1, 255, 1, 255);
int001(10);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, false, 0, 0, [], []);
int013(3, 0, true, false, 0, 0, [], []);
SetLoc(36, 6, 0);
SetSize(8, 5, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetTable(1, 5);
int015(0, 64, [0
1
]);
int015(1, 107, [`Batch indicator`
`IC_001`
]);
int015(2, 105, [`Incoming product`
1
]);
int015(3, 114, [`Outgoing product`
1
]);
int015(4, 128, [`Currently gathered`
0
]);
int015(5, 64, [`PointOfFirstProduct`
0
]);
SetStatus(1);
int018;


{Atom: N3}

sets;
AtomByName([MultiService], Main);
if(not(AtomExists), Error([Cannot find mother atom 'MultiService'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [N3], 1, false);
SetAtt(1, 16);
SetExprAtt(2, [negexp(5*60)]);
SetAtt(3, 0);
SetAtt(4, 0);
SetExprAtt(5, [{.~1|~if(Bernoulli(1, 3, 0) = 3, 3, Bernoulli(2, 1, 2))~.}if(Bernoulli(1, 3, 0) = 3, 3, Bernoulli(2, 1, 2))]);
SetExprAtt(6, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetAtt(9, 0);
SetAtt(10, 1);
SetAtt(11, 0);
SetTextAtt(12, [1]);
SetExprAtt(13, [{.ic(c)|1. Batch by input channel..}ic(c)]);
int023([N3], 0, 232);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\server.bmp]), [server]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\MultiServer.ico]));
SetChannels(1, 3);
SetChannelRanges(1, 255, 1, 255);
int001(11);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, false, 0, 0, [], []);
int013(3, 0, true, false, 0, 0, [], []);
SetLoc(53, 6, 0);
SetSize(8, 5, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetTable(1, 5);
int015(0, 64, [0
1
]);
int015(1, 107, [`Batch indicator`
`IC_001`
]);
int015(2, 105, [`Incoming product`
1
]);
int015(3, 114, [`Outgoing product`
1
]);
int015(4, 128, [`Currently gathered`
0
]);
int015(5, 64, [`PointOfFirstProduct`
0
]);
SetStatus(1);
int018;


{Atom: Hipódromo 1}

sets;
AtomByName([MultiService], Main);
if(not(AtomExists), Error([Cannot find mother atom 'MultiService'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Hipódromo 1], 1, false);
SetAtt(1, 2);
SetExprAtt(2, [negexp(60/15)]);
SetAtt(3, 0);
SetAtt(4, 0);
SetExprAtt(5, [{.~1|~1~.}1]);
SetExprAtt(6, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetAtt(9, 0);
SetAtt(10, 1);
SetAtt(11, 0);
SetTextAtt(12, [1]);
SetExprAtt(13, [{.ic(c)|1. Batch by input channel..}ic(c)]);
int023([Hipódromo 1], 0, 232);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\server.bmp]), [server]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\MultiServer.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(12);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(30, -22, 0);
SetSize(8, 5, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetTable(1, 5);
int015(0, 64, [0
1
]);
int015(1, 107, [`Batch indicator`
`IC_001`
]);
int015(2, 105, [`Incoming product`
1
]);
int015(3, 114, [`Outgoing product`
1
]);
int015(4, 128, [`Currently gathered`
0
]);
int015(5, 64, [`PointOfFirstProduct`
0
]);
SetStatus(1);
int018;


{Atom: Hipódromo 2}

sets;
AtomByName([MultiService], Main);
if(not(AtomExists), Error([Cannot find mother atom 'MultiService'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Hipódromo 2], 1, false);
SetAtt(1, 2);
SetExprAtt(2, [negexp(60/15)]);
SetAtt(3, 0);
SetAtt(4, 0);
SetExprAtt(5, [{.~1|~1~.}1]);
SetExprAtt(6, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetAtt(9, 0);
SetAtt(10, 1);
SetAtt(11, 0);
SetTextAtt(12, [1]);
SetExprAtt(13, [{.ic(c)|1. Batch by input channel..}ic(c)]);
int023([Hipódromo 2], 0, 232);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\server.bmp]), [server]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\MultiServer.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(13);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(30, -16, 0);
SetSize(8, 5, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetTable(1, 5);
int015(0, 64, [0
1
]);
int015(1, 107, [`Batch indicator`
`IC_001`
]);
int015(2, 105, [`Incoming product`
1
]);
int015(3, 114, [`Outgoing product`
1
]);
int015(4, 128, [`Currently gathered`
0
]);
int015(5, 64, [`PointOfFirstProduct`
0
]);
SetStatus(1);
int018;


{Atom: Hipódromo 3}

sets;
AtomByName([MultiService], Main);
if(not(AtomExists), Error([Cannot find mother atom 'MultiService'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Hipódromo 3], 1, false);
SetAtt(1, 2);
SetExprAtt(2, [negexp(60/15)]);
SetAtt(3, 0);
SetAtt(4, 0);
SetExprAtt(5, [{.~1|~1~.}1]);
SetExprAtt(6, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetAtt(9, 0);
SetAtt(10, 1);
SetAtt(11, 0);
SetTextAtt(12, [1]);
SetExprAtt(13, [{.ic(c)|1. Batch by input channel..}ic(c)]);
int023([Hipódromo 3], 0, 232);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\server.bmp]), [server]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\MultiServer.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(14);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(30, -10, 0);
SetSize(8, 5, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetTable(1, 5);
int015(0, 64, [0
1
]);
int015(1, 107, [`Batch indicator`
`IC_001`
]);
int015(2, 105, [`Incoming product`
1
]);
int015(3, 114, [`Outgoing product`
1
]);
int015(4, 128, [`Currently gathered`
0
]);
int015(5, 64, [`PointOfFirstProduct`
0
]);
SetStatus(1);
int018;


{Atom: Hipódromo 4}

sets;
AtomByName([MultiService], Main);
if(not(AtomExists), Error([Cannot find mother atom 'MultiService'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Hipódromo 4], 1, false);
SetAtt(1, 2);
SetExprAtt(2, [negexp(60/15)]);
SetAtt(3, 0);
SetAtt(4, 0);
SetExprAtt(5, [{.~1|~1~.}1]);
SetExprAtt(6, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetAtt(9, 0);
SetAtt(10, 1);
SetAtt(11, 0);
SetTextAtt(12, [1]);
SetExprAtt(13, [{.ic(c)|1. Batch by input channel..}ic(c)]);
int023([Hipódromo 4], 0, 232);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\server.bmp]), [server]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\MultiServer.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(15);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(30, -4, 0);
SetSize(8, 5, 1);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetTable(1, 5);
int015(0, 64, [0
1
]);
int015(1, 107, [`Batch indicator`
`IC_001`
]);
int015(2, 105, [`Incoming product`
1
]);
int015(3, 114, [`Outgoing product`
1
]);
int015(4, 128, [`Currently gathered`
0
]);
int015(5, 64, [`PointOfFirstProduct`
0
]);
SetStatus(1);
int018;


{Atom: Destruye}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Destruye], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [4DS[Label([inspeccion], i) := Time - Label([inspeccion], i)]4DS]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Destruye], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(16);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(63, 7, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: Carritos de carga}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Carritos de carga], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Carritos de carga], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(4, 1);
SetChannelRanges(1, 255, 1, 255);
int001(17);
int013(1, 0, true, false, 0, 0, [], []);
int013(2, 0, true, true, 0, 0, [], []);
int013(3, 0, true, true, 0, 0, [], []);
int013(4, 0, true, true, 0, 0, [], []);
SetLoc(43, -11, 0);
SetSize(6, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: Salida}

sets;
AtomByName([Sink], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Sink'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Salida], 1, false);
SetExprAtt(1, [4DS[if(Input(c)=1,
  Label([inspeccion],c) := Label([inspeccion],i),
  Label([inspeccion],c) := Label([inspeccion],c) + Label([inspeccion],i)
)]4DS]);
SetAtt(2, 4);
int023([Salida], 7168771, 240);
Set(Icon(a), 
	RegisterIcon(pDir([Media\Images\Atoms\sink.bmp]), [sink]));
AddModel3D(
	RegisterModel3D(Model3DDir([sink.wrl]), [sink.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
AddModel3D(
	RegisterModel3D(Model3DDir([sink_Resized.wrl]), [sink_Resized.wrl], 0, 0, 0, 1, 1, -1, -90, 0, 0), a);
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Sink.ico]));
Set(DdbRec, [>inspeccion:760782.143677553.]);
SetChannels(2, 0);
SetChannelRanges(1, 255, 0, 0);
int001(18);
int013(1, 0, true, true, 0, 0, [], []);
int013(2, 0, true, true, 0, 0, [], []);
SetLoc(70, -4, 0);
SetSize(5, 2, 2);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(1);
int018;


{Atom: Cola de hipodromo 1}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Cola de hipodromo 1], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Cola de hipodromo 1], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(19);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(23, -21, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: Cola de hipodromo 2}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Cola de hipodromo 2], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Cola de hipodromo 2], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(20);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(23, -15, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: Cola de hipodromo 3}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Cola de hipodromo 3], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Cola de hipodromo 3], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(21);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(23, -9, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;


{Atom: Cola de hipodromo 4}

sets;
AtomByName([Queue], Main);
if(not(AtomExists), Error([Cannot find mother atom 'Queue'. Inheriting from BaseClass.]));
CreateAtom(a, Up(s), [Cola de hipodromo 4], 1, false);
SetExprAtt(1, [{.~1|~1~.}1]);
SetAtt(2, 999999999);
SetExprAtt(3, [0]);
SetExprAtt(4, [0]);
SetExprAtt(5, [{.content(c)|Fifo (First In First Out).}content(c)]);
SetAtt(6, 1);
SetExprAtt(7, [{.openallic(c)|Any inputchannel.}openallic(c)]);
SetAtt(8, 2);
int023([Cola de hipodromo 4], 12615680, 240);
Set(Icon(a), 
	RegisterIcon(IconsDir([bmp\atoms\queue.bmp]), [queue]));
SetMaterial(
	RegisterMaterial([Default], 8421504, 8421504, 3289650, 0, 0.100000001490116, 0, false, false, 1, 0), 1, a);
Set(Version(a), 0);
SetTreeIcon(pDir([Media\Icons\Queue.ico]));
SetChannels(1, 1);
SetChannelRanges(1, 255, 1, 255);
int001(22);
int013(1, 0, true, false, 0, 0, [], []);
SetLoc(23, -3, 0);
SetSize(5, 2, 0);
LockPosition(false);
LockSize(false);
DisableIconRotation(false);
SetStatus(13);
int018;
Up;
int014(1, 1, 1, 2, 0);
int014(0, 6, 1, 1, 0);
int014(1, 2, 1, 3, 0);
int014(3, 3, 2, 2, 0);
int014(1, 3, 1, 4, 0);
int014(2, 3, 1, 7, 0);
int014(1, 4, 1, 10, 0);
int014(3, 10, 2, 4, 0);
int014(1, 7, 1, 19, 0);
int014(2, 7, 1, 20, 0);
int014(2, 10, 2, 7, 0);
int014(3, 7, 1, 21, 0);
int014(2, 11, 3, 7, 0);
int014(4, 7, 1, 22, 0);
int014(1, 9, 1, 11, 0);
int014(1, 10, 1, 9, 0);
int014(3, 11, 2, 9, 0);
int014(1, 11, 1, 16, 0);
int014(1, 12, 1, 17, 0);
int014(1, 19, 1, 12, 0);
int014(1, 13, 2, 17, 0);
int014(1, 20, 1, 13, 0);
int014(1, 14, 3, 17, 0);
int014(1, 21, 1, 14, 0);
int014(1, 15, 4, 17, 0);
int014(1, 22, 1, 15, 0);
int014(1, 16, 2, 18, 0);
int014(1, 17, 1, 18, 0);
int006(0, 1, 1, 0, 0, 0);


{Experiment settings}

int032(1, 18, 8);
int033(1, 1, 1, [RESULTS]);
int033(1, 1, 2, [10]);
int033(1, 1, 3, [17]);
int033(1, 1, 4, [8]);
int033(1, 1, 5, [0]);
int033(1, 1, 6, [0]);
int033(1, 1, 7, [0]);
int033(1, 1, 8, [0]);
int033(1, 2, 1, [Carritos de carga]);
int033(1, 2, 2, [1]);
int033(1, 2, 3, [número de maletas validas]);
int033(1, 2, 4, [Input(cs)]);
int033(1, 2, 5, [tiempo medio entre dos llegadas sucesivas de maletas validas]);
int033(1, 2, 6, [Age(cs)/Input(cs)]);
int033(1, 2, 7, [0]);
int033(1, 2, 8, [0]);
int033(1, 3, 1, [Cola de hipodromo 1]);
int033(1, 3, 2, [1]);
int033(1, 3, 3, [numero medio de productos]);
int033(1, 3, 4, [AvgContent(cs)]);
int033(1, 3, 5, [tiempo medio de espera]);
int033(1, 3, 6, [AvgStay(cs)]);
int033(1, 3, 7, [0]);
int033(1, 3, 8, [0]);
int033(1, 4, 1, [Cola de hipodromo 2]);
int033(1, 4, 2, [1]);
int033(1, 4, 3, [numero medio de productos]);
int033(1, 4, 4, [AvgContent(cs)]);
int033(1, 4, 5, [tiempo medio de espera]);
int033(1, 4, 6, [AvgStay(cs)]);
int033(1, 4, 7, [0]);
int033(1, 4, 8, [0]);
int033(1, 5, 1, [Cola de hipodromo 3]);
int033(1, 5, 2, [1]);
int033(1, 5, 3, [numero medio de productos]);
int033(1, 5, 4, [AvgContent(cs)]);
int033(1, 5, 5, [tiempo medio de espera]);
int033(1, 5, 6, [AvgStay(cs)]);
int033(1, 5, 7, [0]);
int033(1, 5, 8, [0]);
int033(1, 6, 1, [Cola de hipodromo 4]);
int033(1, 6, 2, [1]);
int033(1, 6, 3, [numero medio de productos]);
int033(1, 6, 4, [AvgContent(cs)]);
int033(1, 6, 5, [tiempo medio de espera]);
int033(1, 6, 6, [AvgStay(cs)]);
int033(1, 6, 7, [0]);
int033(1, 6, 8, [0]);
int033(1, 7, 1, [Cola de N1]);
int033(1, 7, 2, [1]);
int033(1, 7, 3, [numero de medio productos]);
int033(1, 7, 4, [AvgContent(cs)]);
int033(1, 7, 5, [tiempo medio de espera]);
int033(1, 7, 6, [AvgStay(cs)]);
int033(1, 7, 7, [0]);
int033(1, 7, 8, [0]);
int033(1, 8, 1, [Cola de N2]);
int033(1, 8, 2, [1]);
int033(1, 8, 3, [numero de medio productos]);
int033(1, 8, 4, [AvgContent(cs)]);
int033(1, 8, 5, [tiempo medio de espera]);
int033(1, 8, 6, [AvgStay(cs)]);
int033(1, 8, 7, [0]);
int033(1, 8, 8, [0]);
int033(1, 9, 1, [Cola de N3]);
int033(1, 9, 2, [1]);
int033(1, 9, 3, [numero de medio productos]);
int033(1, 9, 4, [AvgContent(cs)]);
int033(1, 9, 5, [tiempo medio de espera]);
int033(1, 9, 6, [AvgStay(cs)]);
int033(1, 9, 7, [0]);
int033(1, 9, 8, [0]);
int033(1, 10, 1, [Destruye]);
int033(1, 10, 2, [1]);
int033(1, 10, 3, [número de maletas peligrosas]);
int033(1, 10, 4, [Input(cs)]);
int033(1, 10, 5, [tiempo medio entre dos llegadas sucesivas de maletas peligrosas]);
int033(1, 10, 6, [Age(cs)/Input(cs)]);
int033(1, 10, 7, [0]);
int033(1, 10, 8, [0]);
int033(1, 11, 1, [Hipódromo 1]);
int033(1, 11, 2, [1]);
int033(1, 11, 3, [nivel de uso]);
int033(1, 11, 4, [4DS[AvgContent(cs)/Att([Capacity],cs)]4DS]);
int033(1, 11, 5, [numero de medio productos]);
int033(1, 11, 6, [AvgContent(cs)]);
int033(1, 11, 7, [tiempo medio de servicio]);
int033(1, 11, 8, [AvgStay(cs)]);
int033(1, 12, 1, [Hipódromo 2]);
int033(1, 12, 2, [1]);
int033(1, 12, 3, [nivel de uso]);
int033(1, 12, 4, [4DS[AvgContent(cs)/Att([Capacity],cs)]4DS]);
int033(1, 12, 5, [numero de medio productos]);
int033(1, 12, 6, [AvgContent(cs)]);
int033(1, 12, 7, [tiempo medio de servicio]);
int033(1, 12, 8, [AvgStay(cs)]);
int033(1, 13, 1, [Hipódromo 3]);
int033(1, 13, 2, [1]);
int033(1, 13, 3, [nivel de uso]);
int033(1, 13, 4, [4DS[AvgContent(cs)/Att([Capacity],cs)]4DS]);
int033(1, 13, 5, [numero de medio productos]);
int033(1, 13, 6, [AvgContent(cs)]);
int033(1, 13, 7, [tiempo medio de servicio]);
int033(1, 13, 8, [AvgStay(cs)]);
int033(1, 14, 1, [Hipódromo 4]);
int033(1, 14, 2, [1]);
int033(1, 14, 3, [nivel de uso]);
int033(1, 14, 4, [4DS[AvgContent(cs)/Att([Capacity],cs)]4DS]);
int033(1, 14, 5, [numero de medio productos]);
int033(1, 14, 6, [AvgContent(cs)]);
int033(1, 14, 7, [tiempo medio de servicio]);
int033(1, 14, 8, [AvgStay(cs)]);
int033(1, 15, 1, [N1]);
int033(1, 15, 2, [1]);
int033(1, 15, 3, [nivel de uso]);
int033(1, 15, 4, [4DS[AvgContent(cs)/Att([Capacity],cs)]4DS]);
int033(1, 15, 5, [numero de medio productos]);
int033(1, 15, 6, [AvgContent(cs)]);
int033(1, 15, 7, [tiempo medio de servicio]);
int033(1, 15, 8, [AvgStay(cs)]);
int033(1, 16, 1, [N2]);
int033(1, 16, 2, [1]);
int033(1, 16, 3, [nivel de uso]);
int033(1, 16, 4, [4DS[AvgContent(cs)/Att([Capacity],cs)]4DS]);
int033(1, 16, 5, [numero de medio productos]);
int033(1, 16, 6, [AvgContent(cs)]);
int033(1, 16, 7, [tiempo medio de servicio]);
int033(1, 16, 8, [AvgStay(cs)]);
int033(1, 17, 1, [N3]);
int033(1, 17, 2, [1]);
int033(1, 17, 3, [nivel de uso]);
int033(1, 17, 4, [4DS[AvgContent(cs)/Att([Capacity],cs)]4DS]);
int033(1, 17, 5, [numero de medio productos]);
int033(1, 17, 6, [AvgContent(cs)]);
int033(1, 17, 7, [tiempo medio de servicio]);
int033(1, 17, 8, [AvgStay(cs)]);
int033(1, 18, 1, [Salida]);
int033(1, 18, 2, [1]);
int033(1, 18, 3, [tiempo total de inspección]);
int033(1, 18, 4, [4DS[Label([inspeccion],cs)/Input(cs)]4DS]);
int033(1, 18, 5, [0]);
int033(1, 18, 6, [0]);
int033(1, 18, 7, [0]);
int033(1, 18, 8, [0]);
int034;
SetAtt(1, 10);
SetExprAtt(2, [hr(8)]);
SetExprAtt(3, [0]);
SetAtt(4, 10);
SetAtt(5, 1);
SetExprAtt(7, [0]);
SetExprAtt(8, [0]);
SetExprAtt(9, [0]);
SetExprAtt(10, [0]);
SetAtt(13, 8);
SetTextAtt(14, [C:\Users\vitam\Documents\Enterprise Dynamics\10.1\]);
SetAtt(16, 100042);
SetAtt(17, 1);
int007;
