import React from 'react';

interface BudgetSummaryProps {
  totalAmount: number;
  budgetLimit: number;
}

export const BudgetSummary: React.FC<BudgetSummaryProps> = ({ totalAmount, budgetLimit }) => {
  const percentage = Math.min((totalAmount / budgetLimit) * 100, 100);
  const isOverBudget = totalAmount > budgetLimit;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-pink-100 p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-end mb-2">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Total Estimated</p>
            <p className={`text-2xl font-black ${isOverBudget ? 'text-red-400' : 'text-pink-500'}`}>
              {totalAmount.toLocaleString()} <span className="text-sm font-normal">THB</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Budget</p>
            <p className="text-gray-600 font-bold">{budgetLimit.toLocaleString()} THB</p>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="h-3 w-full bg-pink-50 rounded-full overflow-hidden border border-pink-100">
          {/* Moving Progress Fill */}
          <div 
            className={`h-full transition-all duration-500 ease-out rounded-full ${
              isOverBudget ? 'bg-red-400' : 'bg-pink-400'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        {isOverBudget && (
          <p className="text-[10px] text-red-400 mt-2 text-center font-bold italic">
            ⚠️ Oh no! You're over your limit! ⚠️
          </p>
        )}
      </div>
    </div>
  );
};