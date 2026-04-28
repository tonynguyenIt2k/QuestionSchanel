/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  BookOpen, 
  ShieldCheck, 
  Smartphone, 
  History,
  Trophy,
  AlertCircle,
  LayoutGrid,
  ArrowLeft,
  Lightbulb
} from 'lucide-react';
import { quizData } from './data/quizData';
import { getExplanation } from './data/explanations';
import { Question } from './types';

type Step = 'start' | 'category' | 'quiz' | 'result';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [selectedCategory, setSelectedCategory] = useState<string | 'Mixed'>('Mixed');
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(quizData.map(q => q.category)));
    return ['Mixed', ...cats];
  }, []);

  const currentQuestion = useMemo(() => activeQuestions[currentQuestionIndex], [activeQuestions, currentQuestionIndex]);
  const progress = useMemo(() => {
     if (activeQuestions.length === 0) return 0;
     return ((currentQuestionIndex + (showFeedback ? 1 : 0)) / activeQuestions.length) * 100;
  }, [activeQuestions, currentQuestionIndex, showFeedback]);

  const score = useMemo(() => {
    return Object.entries(answers).reduce((acc, [qId, answerIdx]) => {
      const q = activeQuestions.find(q => q.id === qId);
      return q?.correctAnswer === answerIdx ? acc + 1 : acc;
    }, 0);
  }, [answers, activeQuestions]);

  const startQuiz = (category: string) => {
    let filtered = category === 'Mixed' 
      ? [...quizData] 
      : quizData.filter(q => q.category === category);
    
    // Shuffle
    filtered = filtered.sort(() => Math.random() - 0.5);
    
    // If mixed, limit to 15 questions to keep it focused
    if (category === 'Mixed') filtered = filtered.slice(0, 15);

    setActiveQuestions(filtered);
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowFeedback(false);
    setLastAnswerCorrect(null);
    setCurrentStep('quiz');
  };

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;

    setAnswers(prev => ({ ...prev, [currentQuestion.id]: optionIndex }));
    setLastAnswerCorrect(optionIndex === currentQuestion.correctAnswer);
    setShowFeedback(true);
  };

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowFeedback(false);
      setLastAnswerCorrect(null);
    } else {
      setCurrentStep('result');
    }
  }, [currentQuestionIndex, activeQuestions]);

  const categoryIcons: Record<string, any> = {
    'Gói Bảo Hành': ShieldCheck,
    'Lý Thuyết Bảo Hành': BookOpen,
    'Lý Thuyết Nhập Máy': Smartphone,
    'Quy Trình Thu Cũ': History,
    'Quy Trình Nhập Trả': AlertCircle,
    'Mixed': LayoutGrid,
  };

  const Icon = categoryIcons[currentQuestion?.category] || categoryIcons[selectedCategory] || BookOpen;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white px-4 py-3 md:p-4 flex justify-between items-center shadow-lg shrink-0 sticky top-0 z-50">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center shadow-inner shrink-0 overflow-hidden">
            <img src="https://play-lh.googleusercontent.com/BpjeDXJLaFEKbM_CE8IA8id5oHNBie8V-rQz3Yj5azdZPRtrvQmzslOIxRqJzj9wD0I" alt="Smember Logo" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h1 className="text-sm md:text-lg font-bold leading-none tracking-tight truncate uppercase">CellphoneS Internal</h1>
            <p className="text-[8px] md:text-[10px] text-slate-400 mt-0.5 md:mt-1 uppercase tracking-widest font-semibold truncate">Training Academy 2026</p>
          </div>
        </div>
        <div className="flex space-x-3 items-center shrink-0">
          {currentStep !== 'start' && (
            <button 
              onClick={() => setCurrentStep('category')}
              className="text-[10px] md:text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider"
            >
              Chọn chủ đề
            </button>
          )}
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto overflow-x-hidden">
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            {currentStep === 'start' && (
              <motion.div
                key="start"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 10 }}
                className="max-w-2xl mx-auto mt-4 md:mt-12 text-center space-y-8 md:space-y-12"
              >
                <div className="space-y-4">
                  <div className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">
                    Chương trình đào tạo kỹ năng
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                    Làm chủ <span className="text-blue-600 font-extrabold italic">Nghiệp vụ</span> <br className="hidden md:block"/> Phục vụ chuyên nghiệp
                  </h2>
                  <p className="text-slate-500 text-sm md:text-lg max-w-lg mx-auto leading-relaxed px-2">
                    Nâng cao kiến thức về chính sách bảo hành mở rộng, quy trình thu cũ đổi mới và kỹ thuật định giá máy chuyên sâu.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="glass p-6 rounded-3xl flex items-center gap-4 text-left transition-transform hover:scale-[1.02]">
                      <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Chính sách VIP</h4>
                        <p className="text-xs text-slate-400">Nắm vững các gói 1 đổi 1 và rơi vỡ.</p>
                      </div>
                   </div>
                   <div className="glass p-6 rounded-3xl flex items-center gap-4 text-left transition-transform hover:scale-[1.02]">
                      <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                        <History className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Thu Cũ Giá Tốt</h4>
                        <p className="text-xs text-slate-400">Định giá chính xác, chốt đơn nhanh.</p>
                      </div>
                   </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setCurrentStep('category')}
                    className="w-full sm:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-200 active:scale-95 text-base uppercase tracking-[0.2em]"
                  >
                    BẮT ĐẦU KIỂM TRA
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 'category' && (
              <motion.div
                key="category"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto space-y-8"
              >
                <div className="text-center md:text-left space-y-2">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Chọn chủ đề đào tạo</h2>
                  <p className="text-slate-400 font-medium">Bạn muốn ôn luyện nội dung nào hôm nay?</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((cat) => {
                    const CatIcon = categoryIcons[cat] || BookOpen;
                    const count = cat === 'Mixed' ? quizData.length : quizData.filter(q => q.category === cat).length;
                    
                    return (
                      <button
                        key={cat}
                        onClick={() => startQuiz(cat)}
                        className={`glass p-6 rounded-3xl text-left border-2 border-transparent hover:border-blue-500 group transition-all relative overflow-hidden`}
                      >
                         <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all`}>
                            <CatIcon className="w-16 h-16" />
                         </div>
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${cat === 'Mixed' ? 'bg-slate-900 text-white' : 'bg-blue-50 text-blue-600'}`}>
                           <CatIcon className="w-6 h-6" />
                         </div>
                         <h3 className="font-bold text-slate-800 text-lg mb-1">{cat === 'Mixed' ? 'Tổng hợp kiến thức' : cat}</h3>
                         <p className="text-xs text-slate-400 font-semibold">{cat === 'Mixed' ? 'Gồm 15 câu ngẫu nhiên' : `${count} câu hỏi nghiệp vụ`}</p>
                      </button>
                    );
                  })}
                </div>

                <button 
                  onClick={() => setCurrentStep('start')}
                  className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors font-bold text-sm mx-auto md:mx-0"
                >
                  <ArrowLeft className="w-4 h-4" /> Về trang chủ
                </button>
              </motion.div>
            )}

            {currentStep === 'quiz' && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-12 gap-x-0 lg:gap-x-8 gap-y-6"
              >
                {/* Question Area */}
                <div className="col-span-12 lg:col-span-8 flex flex-col space-y-4">
                  <div className="lg:hidden flex items-baseline justify-between px-2">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{currentQuestion.category}</span>
                    <span className="text-[10px] font-bold text-slate-400">{currentQuestionIndex + 1} / {activeQuestions.length}</span>
                  </div>

                  <div className="glass rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-sm flex-1 relative min-h-[400px]">
                    <div className="hidden lg:flex justify-between items-center mb-10">
                      <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase">
                        CÂU HỎI {currentQuestionIndex + 1}/{activeQuestions.length}
                      </span>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Icon className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-tight">{currentQuestion.category}</span>
                      </div>
                    </div>

                    <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-800 mb-6 md:mb-12 leading-snug">
                      {currentQuestion.text}
                    </h2>

                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      {currentQuestion.options.map((option, idx) => {
                        const isSelected = answers[currentQuestion.id] === idx;
                        const isCorrect = idx === currentQuestion.correctAnswer;
                        const shouldShowState = showFeedback && (isSelected || isCorrect);

                        let stateStyles = "border-slate-100 bg-white hover:border-blue-400 hover:bg-slate-50";
                        let indicatorStyles = "border-slate-200 text-slate-400 group-hover:border-blue-200 group-hover:text-blue-300";

                        if (shouldShowState) {
                          if (isCorrect) {
                            stateStyles = "border-green-500 bg-green-50/70 ring-1 ring-green-500";
                            indicatorStyles = "bg-green-500 border-green-500 text-white";
                          } else if (isSelected) {
                            stateStyles = "border-red-500 bg-red-50/70 ring-1 ring-red-500";
                            indicatorStyles = "bg-red-500 border-red-500 text-white";
                          }
                        } else if (isSelected) {
                          stateStyles = "border-blue-500 bg-blue-50/30 ring-1 ring-blue-500";
                          indicatorStyles = "bg-blue-600 border-blue-600 text-white";
                        }

                        return (
                          <button
                            key={idx}
                            disabled={showFeedback}
                            onClick={() => handleAnswer(idx)}
                            className={`group relative border-2 rounded-xl md:rounded-2xl p-4 md:p-5 flex items-center transition-all duration-200 text-left active:scale-[0.99] ${stateStyles}`}
                          >
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 flex items-center justify-center mr-3 md:mr-5 font-black text-xs md:text-sm shrink-0 transition-colors ${indicatorStyles}`}>
                              {String.fromCharCode(65 + idx)}
                            </div>
                            <p className={`flex-1 text-sm md:text-lg ${shouldShowState && isCorrect ? 'font-black text-green-800' : 'font-medium text-slate-700'}`}>
                              {option}
                            </p>
                            {showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 ml-2" />}
                            {showFeedback && !isCorrect && isSelected && <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 ml-2" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2">
                    <div className="flex space-x-1 sm:space-x-1.5 order-2 sm:order-1">
                      {activeQuestions.slice(0, Math.min(activeQuestions.length, 15)).map((_, i) => (
                        <div 
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === currentQuestionIndex ? 'w-6 md:w-10 bg-blue-600 text-white px-2 flex items-center justify-center text-[8px] font-bold' : 'w-1.5 md:w-2 bg-slate-200'
                          }`} 
                        >
                           {i === currentQuestionIndex && (i + 1)}
                        </div>
                      ))}
                    </div>
                    
                    <div className="w-full sm:w-auto order-1 sm:order-2">
                      <AnimatePresence>
                        {showFeedback && (
                          <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            onClick={handleNext}
                            className="w-full px-8 md:px-12 py-4 bg-slate-900 text-white rounded-xl md:rounded-2xl font-black hover:bg-slate-800 shadow-xl flex items-center justify-center gap-2 group transition-all uppercase tracking-widest text-xs"
                          >
                            {currentQuestionIndex === activeQuestions.length - 1 ? 'XEM KẾT QUẢ' : 'TIẾP TỤC'}
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="col-span-12 lg:col-span-4 space-y-6">
                  <div className="glass rounded-3xl p-6 shadow-sm overflow-hidden border-blue-100 bg-blue-50/20">
                    <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">Tiến độ bài thi</h3>
                    <div className="relative mb-6">
                      <div className="flex mb-2 items-center justify-between">
                        <span className="text-sm font-black text-blue-600">{Math.round(progress)}% Hoàn thành</span>
                      </div>
                      <div className="overflow-hidden h-2.5 flex rounded-full bg-slate-100">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                      {activeQuestions.map((q, i) => {
                        const answer = answers[q.id];
                        const isAnswered = answer !== undefined;
                        const isCorrect = isAnswered && answer === q.correctAnswer;
                        const isCurrent = i === currentQuestionIndex;

                        let style = "bg-white text-slate-200 border-slate-100";
                        if (isAnswered) {
                          style = isCorrect ? "bg-green-500 text-white border-green-500 shadow-sm shadow-green-100" : "bg-red-400 text-white border-red-400 shadow-sm shadow-red-100";
                        } else if (isCurrent) {
                          style = "bg-white border-2 border-blue-600 text-blue-600 scale-110 shadow-lg z-10";
                        }

                        return (
                          <div 
                            key={i} 
                            className={`aspect-square sm:aspect-auto sm:h-9 rounded-lg border-2 flex items-center justify-center font-black text-[10px] transition-all duration-300 ${style}`}
                          >
                            {i + 1}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {showFeedback ? (
                      <motion.div
                        key="explanation"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`glass rounded-3xl p-6 shadow-sm relative overflow-hidden ${
                          lastAnswerCorrect
                            ? 'bg-green-900 text-white'
                            : 'bg-amber-900 text-white'
                        }`}
                      >
                        <div className={`absolute top-0 right-0 p-4 opacity-10`}>
                          <Lightbulb className="w-20 h-20" />
                        </div>
                        <h3 className={`text-[10px] font-black uppercase tracking-widest mb-4 ${
                          lastAnswerCorrect ? 'text-green-300' : 'text-amber-300'
                        }`}>
                          {lastAnswerCorrect ? '✓ Chính xác!' : '✗ Chưa đúng!'}
                        </h3>
                        <div className="p-3 bg-white/10 rounded-xl">
                          <p className="text-[10px] font-bold uppercase mb-2 opacity-70">Giải thích:</p>
                          <p className="text-xs md:text-sm leading-relaxed font-medium">
                            {getExplanation(currentQuestion.id)}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="notes"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="glass rounded-3xl p-6 shadow-sm bg-indigo-900 text-white relative overflow-hidden group hidden lg:block"
                      >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                          <AlertCircle className="w-20 h-20" />
                        </div>
                        <h3 className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-4">Ghi chú quan trọng</h3>
                        <div className="space-y-4">
                          <div className="p-3 bg-white/10 rounded-xl">
                            <p className="text-[10px] font-bold text-indigo-200 uppercase mb-1">Thu cũ:</p>
                            <p className="text-[10px] leading-relaxed">Pin &lt; 85% hỗ trợ 30% giá thay pin rẻ nhất. Android trừ 200k sạc nguồn.</p>
                          </div>
                          <div className="p-3 bg-white/10 rounded-xl">
                            <p className="text-[10px] font-bold text-indigo-200 uppercase mb-1">Apple:</p>
                            <p className="text-[10px] leading-relaxed">Thoát iCloud + Xin Email + In biên nhận A4 (Đầy đủ chữ ký/dấu).</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </aside>
              </motion.div>
            )}

            {currentStep === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center space-y-8 py-4 md:py-10"
              >
                <div className="p-8 md:p-12 bg-white rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col items-center gap-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />
                  
                  <div className="relative mb-4">
                    <div className={`p-8 rounded-full text-white shadow-2xl ring-8 ${score >= activeQuestions.length * 0.8 ? 'bg-green-500 ring-green-50' : 'bg-red-500 ring-red-50'}`}>
                      {score >= activeQuestions.length * 0.8 ? <Trophy className="w-12 h-12" /> : <AlertCircle className="w-12 h-12" />}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900">{score >= activeQuestions.length * 0.8 ? 'Huấn luyện Hoàn tất!' : 'Cần ôn tập thêm'}</h2>
                    <p className="text-sm md:text-lg font-medium text-slate-400">Chủ đề: <span className="text-blue-600">{selectedCategory === 'Mixed' ? 'Tổng hợp' : selectedCategory}</span></p>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mt-4">
                    <span className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter tabular-nums">{score}</span>
                    <span className="text-2xl md:text-4xl font-bold text-slate-300">/ {activeQuestions.length}</span>
                  </div>

                  <div className={`px-8 py-3 rounded-2xl text-[10px] md:text-xs font-black tracking-widest uppercase shadow-sm ${
                    score >= activeQuestions.length * 0.8 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {score >= activeQuestions.length * 0.8 ? "ĐẠT CHỈ TIÊU ĐÀO TẠO" : "CHƯA ĐẠT CHỈ TIÊU"}
                  </div>
                  
                  <p className="text-sm md:text-lg font-bold text-slate-600 max-w-sm">
                    {score === activeQuestions.length 
                      ? "Một kết quả tuyệt đối! Bạn là chuyên gia về quy trình CellphoneS." 
                      : score >= activeQuestions.length * 0.7 
                        ? "Khá tốt! Bạn đã đủ năng lực để phục vụ khách hàng."
                        : "Kết quả chưa đạt. Hãy ôn lại tài liệu và thử lại để nắm chắc hơn."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto px-4">
                  <button
                    onClick={() => startQuiz(selectedCategory)}
                    className="flex-1 flex items-center justify-center gap-3 py-5 border-2 border-slate-200 rounded-2xl font-black text-slate-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95 text-xs uppercase tracking-widest shadow-sm"
                  >
                    <RotateCcw className="w-4 h-4" />
                    THỬ LẠI
                  </button>
                  <button
                     onClick={() => setCurrentStep('category')}
                    className="flex-1 flex justify-center items-center py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest"
                  >
                    ĐỔI CHỦ ĐỀ
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="px-4 py-3 md:p-4 border-t border-slate-200 bg-white text-center text-[7px] md:text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] shrink-0">
        CELLPHONES TRAINING CENTER - © 2026 - TÀI LIỆU NỘI BỘ
      </footer>
    </div>
  );
}
