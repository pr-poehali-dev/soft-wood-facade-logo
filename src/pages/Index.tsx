import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'hero' | 'technology'>('hero');

  const scrollToTechnology = () => {
    setActiveSection('technology');
    document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/dc7ad279-a4ba-48ba-b78f-a44928c6450c/files/a40b55d1-47a4-4b05-a4e1-c6163b1dcd32.jpg" 
              alt="Логотип" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-semibold">SoftWood</span>
          </div>
          <div className="flex gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={scrollToTechnology}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Технология
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Фасады из
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted">
                  мягкого дерева
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Инновационная технология обработки древесины для создания уникальных архитектурных решений с параметрическим дизайном
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={scrollToTechnology} className="group">
                  Узнать больше
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button size="lg" variant="outline">
                  Наши проекты
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/dc7ad279-a4ba-48ba-b78f-a44928c6450c/files/d15c7b7a-142c-44be-a902-08073b897085.jpg"
                alt="Архитектурный фасад"
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Waves" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Органичность</h3>
                <p className="text-muted-foreground">
                  Плавные параметрические формы создают уникальный визуальный образ здания
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Shield" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Долговечность</h3>
                <p className="text-muted-foreground">
                  Специальная обработка обеспечивает защиту от внешних воздействий на десятилетия
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow hover-scale">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Leaf" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Экологичность</h3>
                <p className="text-muted-foreground">
                  100% натуральные материалы и экологически чистое производство
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="technology" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-5xl font-bold">Технология мягкого дерева</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Уникальный процесс обработки древесины, позволяющий создавать гибкие формы без потери прочности
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Отбор материала</h3>
                    <p className="text-muted-foreground">
                      Используем отборную древесину хвойных пород с оптимальной плотностью и структурой волокон
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Термическая обработка</h3>
                    <p className="text-muted-foreground">
                      Древесина проходит специальную термообработку при температуре 180-220°C, что изменяет структуру волокон
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Гидроформовка</h3>
                    <p className="text-muted-foreground">
                      Материал становится пластичным и может принимать сложные параметрические формы без трещин
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Финишная защита</h3>
                    <p className="text-muted-foreground">
                      Нанесение защитных составов обеспечивает устойчивость к влаге, УФ-излучению и биопоражению
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/dc7ad279-a4ba-48ba-b78f-a44928c6450c/files/43e58562-9210-40eb-b85b-41cb349af23d.jpg"
                alt="Технология производства"
                className="relative rounded-3xl shadow-2xl w-full h-[550px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <Icon name="Gauge" size={32} className="text-primary" />
                <h3 className="text-2xl font-semibold">Технические характеристики</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Радиус изгиба от 50 см
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Влажность 8-12%
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Срок службы более 50 лет
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Класс пожаробезопасности Г2
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8 space-y-4">
                <Icon name="PenTool" size={32} className="text-primary" />
                <h3 className="text-2xl font-semibold">Возможности применения</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Вентилируемые фасады
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Интерьерные решения
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Архитектурные акценты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-primary" />
                    Малые архитектурные формы
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl font-bold">Готовы обсудить ваш проект?</h2>
          <p className="text-lg opacity-90">
            Наши специалисты помогут воплотить самые смелые архитектурные решения
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Связаться с нами
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src="https://cdn.poehali.dev/projects/dc7ad279-a4ba-48ba-b78f-a44928c6450c/files/a40b55d1-47a4-4b05-a4e1-c6163b1dcd32.jpg" 
                  alt="Логотип" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-lg font-semibold">SoftWood</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные решения в области архитектурных фасадов
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@softwood.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="hover:text-primary cursor-pointer transition-colors">Главная</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Технология</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Проекты</p>
                <p className="hover:text-primary cursor-pointer transition-colors">Контакты</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 SoftWood. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
