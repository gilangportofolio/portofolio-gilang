import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ToolsList = ({ tools }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisibleTools = 4;
  const hiddenCount = tools.length - maxVisibleTools;

  return (
    <div className="wadah-alat">
      <p className="label-tools">Tools yang digunakan:</p>
      <div className={`tools-container ${isExpanded ? 'expanded' : ''}`}>
        <AnimatePresence>
          {(isExpanded ? tools : tools.slice(0, maxVisibleTools)).map((tool, index) => (
            <motion.span
              key={tool}
              initial={isExpanded ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="label-alat"
            >
              {tool}
            </motion.span>
          ))}
        </AnimatePresence>
        {hiddenCount > 0 && (
          <button 
            className="tombol-more-tools"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <FontAwesomeIcon icon={faChevronUp} />
                Sembunyikan
              </>
            ) : (
              <>+{hiddenCount} lainnya</>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ToolsList; 