import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const cryptoPrices = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: "$67,543",
      change: "+2.41%",
      changeType: "up",
      volume: "$28.7B",
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: "$3,891",
      change: "+3.12%",
      changeType: "up",
      volume: "$15.2B",
    },
    {
      symbol: "BNB",
      name: "BNB",
      price: "$627",
      change: "-0.85%",
      changeType: "down",
      volume: "$2.8B",
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: "$198",
      change: "+5.67%",
      changeType: "up",
      volume: "$4.1B",
    },
    {
      symbol: "XRP",
      name: "XRP",
      price: "$0.58",
      change: "+1.23%",
      changeType: "up",
      volume: "$1.9B",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      price: "$0.47",
      change: "-2.14%",
      changeType: "down",
      volume: "$0.8B",
    },
  ];

  const portfolioData = [
    { asset: "BTC", amount: "0.5847", value: "$39,487", allocation: 45 },
    { asset: "ETH", amount: "12.84", value: "$49,956", allocation: 35 },
    { asset: "BNB", amount: "89.7", value: "$56,238", allocation: 15 },
    { asset: "SOL", amount: "25.3", value: "$5,009", allocation: 5 },
  ];

  const recentTrades = [
    {
      time: "14:32:15",
      pair: "BTC/USDT",
      type: "BUY",
      amount: "0.0542",
      price: "$67,543",
      total: "$3,661",
    },
    {
      time: "14:31:48",
      pair: "ETH/USDT",
      type: "SELL",
      amount: "2.1",
      price: "$3,891",
      total: "$8,171",
    },
    {
      time: "14:31:22",
      pair: "BNB/USDT",
      type: "BUY",
      amount: "15.7",
      price: "$627",
      total: "$9,844",
    },
    {
      time: "14:30:59",
      pair: "SOL/USDT",
      type: "BUY",
      amount: "45.2",
      price: "$198",
      total: "$8,950",
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-bitcoin to-electric rounded-full flex items-center justify-center">
                    <Icon name="Bitcoin" size={20} className="text-white" />
                  </div>
                  <h1 className="text-xl font-bold">CryptoEx</h1>
                </div>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="hover:text-primary transition-colors">
                    Главная
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Рынки
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Торговля
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    P2P
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Кошелек
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Портфолио
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    Аналитика
                  </a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  <Icon name={isDarkMode ? "Sun" : "Moon"} size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="User" size={16} className="mr-2" />
                  Войти
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-bitcoin to-electric"
                >
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Торгуйте криптовалютами
              <span className="block text-transparent bg-gradient-to-r from-bitcoin to-electric bg-clip-text">
                на лучшей бирже
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Безопасность уровня банка, маржинальная торговля, фьючерсы и
              поддержка 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-bitcoin to-electric"
              >
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Начать торговлю
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="markets" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="markets">Рынки</TabsTrigger>
              <TabsTrigger value="trading">Торговля</TabsTrigger>
              <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
              <TabsTrigger value="p2p">P2P</TabsTrigger>
              <TabsTrigger value="analytics">Аналитика</TabsTrigger>
            </TabsList>

            {/* Markets Tab */}
            <TabsContent value="markets" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">
                      Общий объем 24ч
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$89.2B</div>
                    <div className="text-sm text-success">+12.3%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">
                      Общая капитализация
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$2.7T</div>
                    <div className="text-sm text-success">+5.8%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">
                      Доминация BTC
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">52.8%</div>
                    <div className="text-sm text-error">-1.2%</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">
                      Активные пары
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <div className="text-sm text-success">+23</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Топ криптовалют
                  </CardTitle>
                  <CardDescription>
                    Самые торгуемые криптовалюты на бирже
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cryptoPrices.map((crypto, index) => (
                      <div
                        key={crypto.symbol}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-bitcoin to-electric rounded-full flex items-center justify-center font-bold text-white text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-semibold">{crypto.symbol}</div>
                            <div className="text-sm text-muted-foreground">
                              {crypto.name}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold font-data">
                            {crypto.price}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Vol: {crypto.volume}
                          </div>
                        </div>
                        <Badge
                          variant={
                            crypto.changeType === "up"
                              ? "default"
                              : "destructive"
                          }
                          className="font-data"
                        >
                          {crypto.change}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Trading Tab */}
            <TabsContent value="trading" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BarChart3" size={20} />
                      График BTC/USDT
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-96 bg-muted/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon
                          name="TrendingUp"
                          size={48}
                          className="mx-auto mb-4 text-bitcoin"
                        />
                        <p className="text-muted-foreground">
                          TradingView График
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Интерактивный график с техническими индикаторами
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BookOpen" size={20} />
                      Книга ордеров
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Цена</span>
                        <span>Объем</span>
                      </div>
                      <div className="space-y-1">
                        {[
                          { price: "67,567", amount: "0.245", type: "sell" },
                          { price: "67,556", amount: "0.891", type: "sell" },
                          { price: "67,545", amount: "1.234", type: "sell" },
                          { price: "67,543", amount: "0.456", type: "current" },
                          { price: "67,540", amount: "0.789", type: "buy" },
                          { price: "67,535", amount: "2.123", type: "buy" },
                          { price: "67,528", amount: "0.567", type: "buy" },
                        ].map((order, index) => (
                          <div
                            key={index}
                            className={`flex justify-between text-sm p-2 rounded ${
                              order.type === "sell"
                                ? "bg-error/10"
                                : order.type === "buy"
                                  ? "bg-success/10"
                                  : "bg-bitcoin/10"
                            }`}
                          >
                            <span
                              className={`font-data ${
                                order.type === "sell"
                                  ? "text-error"
                                  : order.type === "buy"
                                    ? "text-success"
                                    : "text-bitcoin font-bold"
                              }`}
                            >
                              {order.price}
                            </span>
                            <span className="font-data">{order.amount}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="ShoppingCart" size={20} />
                      Купить BTC
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Цена (USDT)</label>
                      <Input placeholder="67,543" className="font-data" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Количество (BTC)
                      </label>
                      <Input placeholder="0.001" className="font-data" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Сумма (USDT)
                      </label>
                      <Input placeholder="67.543" className="font-data" />
                    </div>
                    <Button className="w-full bg-success hover:bg-success/90">
                      Купить BTC
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingDown" size={20} />
                      Продать BTC
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Цена (USDT)</label>
                      <Input placeholder="67,543" className="font-data" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Количество (BTC)
                      </label>
                      <Input placeholder="0.001" className="font-data" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Сумма (USDT)
                      </label>
                      <Input placeholder="67.543" className="font-data" />
                    </div>
                    <Button className="w-full bg-error hover:bg-error/90">
                      Продать BTC
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Portfolio Tab */}
            <TabsContent value="portfolio" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Wallet" size={20} />
                      Общий баланс
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-data">
                      $150,690.34
                    </div>
                    <div className="text-sm text-success">+8.2% за 24ч</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} />
                      P&L сегодня
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-data text-success">
                      +$12,456.78
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Нереализованная прибыль
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Activity" size={20} />
                      Активных позиций
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold font-data">7</div>
                    <div className="text-sm text-muted-foreground">
                      Открытых ордеров
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PieChart" size={20} />
                    Распределение портфеля
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolioData.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/20"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-bitcoin to-electric rounded-full flex items-center justify-center font-bold text-white">
                            {item.asset}
                          </div>
                          <div>
                            <div className="font-semibold">
                              {item.amount} {item.asset}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.allocation}% портфеля
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold font-data">
                            {item.value}
                          </div>
                          <Progress
                            value={item.allocation}
                            className="w-20 mt-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* P2P Tab */}
            <TabsContent value="p2p" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={20} />
                    P2P Обмен
                  </CardTitle>
                  <CardDescription>
                    Торгуйте напрямую с другими пользователями
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Купить криптовалюту</h3>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Валюта</label>
                        <Input placeholder="BTC" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Способ оплаты
                        </label>
                        <Input placeholder="Сбербанк" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Сумма (RUB)
                        </label>
                        <Input placeholder="100,000" />
                      </div>
                      <Button className="w-full bg-success hover:bg-success/90">
                        Найти продавцов
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Продать криптовалюту</h3>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Валюта</label>
                        <Input placeholder="BTC" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Способ получения
                        </label>
                        <Input placeholder="Сбербанк" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Сумма (RUB)
                        </label>
                        <Input placeholder="100,000" />
                      </div>
                      <Button className="w-full bg-error hover:bg-error/90">
                        Найти покупателей
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="BarChart" size={20} />
                      Статистика торговли
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Всего сделок</span>
                        <span className="font-data">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Прибыльных сделок</span>
                        <span className="font-data text-success">
                          892 (71.5%)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Убыточных сделок</span>
                        <span className="font-data text-error">
                          355 (28.5%)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Средняя прибыль</span>
                        <span className="font-data text-success">+$124.67</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Общий P&L</span>
                        <span className="font-data text-success">
                          +$156,789.23
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Shield" size={20} />
                      Безопасность
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>2FA аутентификация</span>
                        <Badge variant="default">Активна</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>SMS уведомления</span>
                        <Badge variant="default">Активны</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Email уведомления</span>
                        <Badge variant="default">Активны</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Биометрия</span>
                        <Badge variant="outline">Не настроена</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Холодное хранение</span>
                        <Badge variant="default">95% активов</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={20} />
                    Последние транзакции
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTrades.map((trade, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/20"
                      >
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant={
                              trade.type === "BUY" ? "default" : "destructive"
                            }
                          >
                            {trade.type}
                          </Badge>
                          <div>
                            <div className="font-semibold">{trade.pair}</div>
                            <div className="text-sm text-muted-foreground">
                              {trade.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-data">
                            {trade.amount} @ {trade.price}
                          </div>
                          <div className="text-sm text-muted-foreground font-data">
                            Total: {trade.total}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-muted/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-bitcoin to-electric rounded-full flex items-center justify-center">
                    <Icon name="Bitcoin" size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg">CryptoEx</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ведущая криптовалютная биржа с передовыми технологиями
                  безопасности
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Торговля</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Спот торговля
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Маржинальная торговля
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Фьючерсы
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      P2P
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Поддержка</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Помощь
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      API документация
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Комиссии
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Безопасность</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Фонд защиты
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Аудит безопасности
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground">
                      Условия использования
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 CryptoEx. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
